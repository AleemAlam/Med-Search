import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function MyButton({
  title,
  iconName,
  size,
  color,
  style,
  handlePress,
}) {
  return (
    <View
      style={[
        {
          backgroundColor: "dodgerblue",
          height: 30,
          width: 40,
          marginTop: 30,
          marginLeft: 20,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
    >
      <TouchableOpacity onPress={handlePress}>
        {iconName ? (
          <MaterialIcons name={iconName} size={size} color={color} />
        ) : (
          <Text style={{ color }}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
