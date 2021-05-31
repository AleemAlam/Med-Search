import React from "react";
import { View, Text, Image } from "react-native";
import DarkText from "./DarkText";

export default function FlatCard({ name = "a", address }) {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        marginTop: 10,
        flexDirection: "row",
        borderRadius: 10,
        height: 60,
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          borderRadius: 5,
          height: 50,
          width: 50,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          {name[0].toUpperCase()}
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: 20,

          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {name}
        </Text>
        <View
          style={{
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto",
              color: "#000",
              opacity: 0.5,
              fontSize: 10,
            }}
          >
            {address}
          </Text>
        </View>
      </View>
    </View>
  );
}
