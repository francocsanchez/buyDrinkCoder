import { Home, ListFilter, Drinks } from "../screens";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ListFilter" component={ListFilter} />
      <Stack.Screen name="Drinks" component={Drinks} />
      <Stack.Screen name="Drink" component={Drinks} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
