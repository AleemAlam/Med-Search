import React, { useState } from "react";
import { View, Text } from "react-native";
import DarkText from "./DarkText";

export default function InformationCard({ title, description }) {
  const [showFull, setShowFull] = useState(false);
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        borderRadius: 15,
        padding: 20,
        marginTop: 10,
      }}
    >
      <DarkText style={{ fontSize: 20, marginTop: 0 }}>{title}</DarkText>
      <Text
        numberOfLines={!showFull ? 2 : 0}
        onPress={() => setShowFull(!showFull)}
        style={{
          color: "#B2B2B2",
        }}
      >
        {description}
      </Text>
    </View>
  );
}
