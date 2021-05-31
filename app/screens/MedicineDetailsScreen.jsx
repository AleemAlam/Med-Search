import React from "react";
import { View, Text, ScrollView } from "react-native";
import CoverImage from "../components/CoverImage";
import DarkText from "../components/DarkText";
import LightText from "../components/LightText";
import { FontAwesome } from "@expo/vector-icons";
import InformationCard from "../components/InformationCard";
import SmallCard from "../components/SmallCard";
import MyButton from "../components/MyButton";

const topDistributer = [
  { name: "Janta Medicos", img: require(`../assets/images/CardImg-2.jpg`) },
  {
    name: "Jay Shree Medicos",
    img: require(`../assets/images/CardImg-3.jpg`),
  },
  {
    name: "Sudhapar & Company",
    img: require(`../assets/images/CardImg-4.jpg`),
  },
  {
    name: "Piyush Medical Agency",
    img: require(`../assets/images/CardImg-5.jpg`),
  },
  {
    name: "Murari Lal & CO.",
    img: require(`../assets/images/CardImg-1.jpg`),
  },
];
export default function MedicineDetailsScreen({ route }) {
  const { medicine_name, manufacture, mrp, packing, drugs, form } =
    route.params;
  return (
    <ScrollView
      style={{
        backgroundColor: "#fbffff",
      }}
    >
      <CoverImage />
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#FFF",
            padding: 10,
            borderRadius: 15,
            marginVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View>
              <DarkText
                style={{
                  width: 400,
                  marginTop: 0,
                  textTransform: "capitalize",
                }}
              >
                {medicine_name}
              </DarkText>
              <LightText
                style={{
                  width: "60%",
                  marginTop: 10,
                  textTransform: "capitalize",
                }}
              >
                {manufacture.name}
              </LightText>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <LightText style={{ marginTop: 10, width: "60%" }}>
                  Packing:
                  {`${packing} ${form}`}
                </LightText>
                <LightText style={{ marginTop: 10 }}>
                  <FontAwesome name="rupee" size={15} color="#999" />
                  {` ${mrp}`}
                </LightText>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {drugs.map((drug, i) => (
                  <View
                    key={i}
                    style={{
                      marginRight: 10,
                      borderRadius: 10,
                      marginVertical: 10,
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      backgroundColor: "#67b3ff",
                    }}
                  >
                    <Text
                      style={{ textTransform: "capitalize", color: "white" }}
                    >
                      {drug.drug_name}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
        <InformationCard
          title="Description"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 20 }}
      >
        {topDistributer.map((dis, i) => (
          <SmallCard
            key={i}
            {...dis}
            style={{ width: 100, height: 130 }}
            imgStyle={{ height: 100 }}
            txtStyle={{ fontSize: 10 }}
          />
        ))}
      </ScrollView>
      <View
        style={{
          justifyContent: "flex-end",
          flexDirection: "row",
          paddingRight: 20,
        }}
      >
        <MyButton
          title="View All"
          color="white"
          style={{ marginTop: 0, width: 100 }}
        />
      </View>
    </ScrollView>
  );
}
