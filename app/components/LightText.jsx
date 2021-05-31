import React from "react";
import { Text, StyleSheet } from "react-native";

export default function LightText({ children, style }) {
  return <Text style={[styles.container, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    color: "#B0B0B0",
    marginTop: 40,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
});
