import React from "react";
import { View, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function SearchBar({ handleChange }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 5,
        padding: 5,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <TextInput
        placeholder="What are you looking for?"
        placeholderTextColor="#B0B0B0"
        style={{
          fontFamily: "Roboto",
          paddingHorizontal: 20,
        }}
        onChangeText={handleChange}
      />
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 60,
          height: 40,
          borderRadius: 30,
          marginLeft: 55,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialIcons name="search" color={"white"} size={30} />
      </View>
    </View>
  );
}
