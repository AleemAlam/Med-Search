import React from "react";
import { StyleSheet, Text } from "react-native";

export default function DarkText({ style, children }) {
  return <Text style={[styles.container, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 13,
  },
});
