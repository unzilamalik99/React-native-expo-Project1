import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Boarding from "./Components/Boarding";
import HomeScreen from "./Components/HomeScreen";
import DetailItem from "./Components/DetailItem";
import Cappuccino from "./Components/Cappuccino";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Boarding" component={Boarding} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailItem" component={DetailItem} />
        <Stack.Screen name="Cappuccino" component={Cappuccino} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
