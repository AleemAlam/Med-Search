import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import DarkText from "../components/DarkText";
import FlatCard from "../components/FlatCard";
import LightText from "../components/LightText";
import SearchBar from "../components/SearchBar";
import SmallCard from "../components/SmallCard";

import { searchMedicine } from "../Network/network";

let scrolling = false;

const topBrand = [
  {
    name: "Leeford",
    products: "10000+",
    image: require(`../assets/images/CardImg-2.jpg`),
  },
  {
    name: "Glenmark",
    products: "10000+",
    image: require(`../assets/images/CardImg-3.jpg`),
  },
  {
    name: "Lupin",
    products: "10000+",
    image: require(`../assets/images/CardImg-4.jpg`),
  },
  {
    name: "Elder",
    products: "10000+",
    image: require(`../assets/images/CardImg-5.jpg`),
  },
  {
    name: "BW on",
    products: "10000+",
    image: require(`../assets/images/CardImg-3.jpg`),
  },
];
const topDistributer = [
  { name: "Janta Medicos", address: "Najibabad" },
  { name: "Jay Shree Medicos", address: "Najibabad" },
  { name: "Sudhapar & Company", address: "Najibabad" },
  { name: "Piyush Medical Agency", address: "Najibabad" },
  { name: "Murari Lal & CO.", address: "Najibabad" },
];
export default function WelcomeScreen() {
  const [medicine, setMedicine] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isNext, setIsNext] = useState(true);
  const [showSearching, setShowSearching] = useState(false);
  const navigator = useNavigation();
  let inputText = "";
  const handleChange = (text) => {
    if (text) {
      setLoading(true);
      setShowSearching(true);
      inputText = text;
      searchMedicine(page, text)
        .then((res) => {
          setMedicine(res.data.results);
          setLoading(false);
          res.data.next == null ? setIsNext(false) : setIsNext(true);
        })
        .catch(console.error);
    } else {
      setMedicine([]);
      setLoading(false);
    }
  };

  const handleAdd = () => {
    searchMedicine(page, inputText)
      .then((res) => {
        setMedicine([...medicine, ...res.data.results]);
        res.data.next == null ? setIsNext(false) : setIsNext(true);
      })
      .catch(console.error);
  };
  const handleEnd = () => {
    if (scrolling && isNext) {
      setPage(page + 1);
      console.log("enter");
      handleAdd();
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowSearching(false)}>
        <ScrollView
          style={{
            backgroundColor: "#fbffff",
            paddingHorizontal: 20,
          }}
          onScroll={() => setShowSearching(false)}
        >
          <LightText>Hello Guest</LightText>
          <DarkText>Search Any Product You Like</DarkText>
          <SearchBar handleChange={handleChange} />
          <DarkText
            style={{
              marginTop: 20,
              fontSize: 15,
            }}
          >
            Most Popular Brands
          </DarkText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ top: -20 }}
          >
            {topBrand.map((brand, i) => (
              <SmallCard
                key={i}
                img={brand.image}
                name={brand.name}
                totalProduct={brand.products}
              />
            ))}
          </ScrollView>
          <DarkText
            style={{
              marginTop: 20,
              fontSize: 15,
            }}
          >
            Top Distributer
          </DarkText>
          {topDistributer.map((dis, i) => (
            <FlatCard key={i} name={dis.name} address={dis.address} />
          ))}
        </ScrollView>
      </TouchableWithoutFeedback>

      {showSearching && (
        <View
          style={{
            position: "absolute",
            top: 160,
            paddingHorizontal: 15,
            marginLeft: 5,
            width: "100%",
          }}
        >
          <FlatList
            style={{
              width: "98%",
            }}
            data={medicine}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableHighlight
                  onPress={() => navigator.navigate("MedicineScreen", item)}
                  underlayColor={"lightgray"}
                >
                  <View style={{ backgroundColor: "white", padding: 10 }}>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 16,
                        textTransform: "capitalize",
                      }}
                    >
                      {item.medicine_name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Roboto",
                          fontSize: 13,
                          textTransform: "capitalize",
                        }}
                      >
                        {item.form}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Roboto",
                          fontSize: 13,
                          textTransform: "capitalize",
                        }}
                      >
                        {item.manufacture.name}
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
              );
            }}
            onEndReached={handleEnd}
            onEndReachedThreshold={0}
            onScrollBeginDrag={() => {
              scrolling = true;
            }}
            ListFooterComponent={() =>
              loading ? (
                <Text
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    fontFamily: "Roboto",
                    fontSize: 16,
                    textTransform: "capitalize",
                  }}
                >
                  Loading...
                </Text>
              ) : (
                (console.log(isNext),
                !isNext && (
                  <Text
                    style={{
                      backgroundColor: "white",
                      padding: 10,
                      fontFamily: "Roboto",
                      fontSize: 16,
                      textTransform: "capitalize",
                    }}
                  >
                    No More Items Left
                  </Text>
                ))
              )
            }
          />
        </View>
      )}
    </>
  );
}
