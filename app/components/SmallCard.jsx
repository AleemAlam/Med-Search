import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors } from "../assets/colors";

export default function SmallCard({
  style,
  img,
  name,
  totalProduct,
  imgStyle,
  txtStyle,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => console.log(name)}
    >
      <Image source={img} style={[styles.imageStyle, imgStyle]} />
      <View style={styles.cardBody}>
        <Text numberOfLines={1} style={[styles.bodyText, txtStyle]}>
          {name}
        </Text>

        {totalProduct && (
          <View style={styles.bodyBottomContainer}>
            <View style={styles.bottomTop}>
              <Text style={[styles.bodyText, { fontSize: 12, color: "#888" }]}>
                Products
              </Text>
            </View>

            <Text
              style={[
                styles.bodyText,
                {
                  fontSize: 12,
                  color: "#888",
                },
              ]}
            >
              {totalProduct}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: 220,
    width: 150,
    borderRadius: 20,
    marginTop: 25,
    marginLeft: 10,
    overflow: "hidden",
  },
  imageStyle: { width: "100%", height: 150, borderRadius: 20 },
  cardBody: {
    backgroundColor: colors.white,
    height: 60,
    padding: 8,
  },
  bodyText: {
    color: "#000",
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontSize: 20,
  },
  bodyBottomContainer: {
    flexDirection: "row",
    marginTop: 4,
    justifyContent: "space-between",
  },
  bottomTop: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
