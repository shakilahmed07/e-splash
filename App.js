import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/screens/home";
import Details from "./src/screens/details";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Rubik-Bold": require("./assets/font/Rubik-Bold.ttf"),
    "Rubik-Regular": require("./assets/font/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("./assets/font/Rubik-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
