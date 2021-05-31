import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import MedicineDetailsScreen from "../screens/MedicineDetailsScreen";

const Stack = createStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="MedicineScreen" component={MedicineDetailsScreen} />
    </Stack.Navigator>
  );
}
