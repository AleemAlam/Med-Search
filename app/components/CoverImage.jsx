import React from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import MyButton from "./MyButton";
import { useNavigation } from "@react-navigation/core";
export default function CoverImage() {
  const navigator = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/images/CoverImg-1.jpg")}
      style={{ width: "100%", height: 250 }}
    >
      <MyButton
        iconName="arrow-back"
        size={24}
        color="white"
        handlePress={() => navigator.pop()}
      />
    </ImageBackground>
  );
}
