// App.js

import React from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import COLORS from "./src/theme/Color";
import BottomNavigation from "./src/navigation/BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/screens/Welcome/WelcomeScreen";
import useFonts from "./src/utils/useFonts";
import GenreScreen from "./src/screens/Genre/GenreScreen";
import MovieDetail from "./src/screens/Movie/MovieDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  const fontsLoaded = useFonts(); // Use the custom hook

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.WHITE} />
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Genre"
            component={GenreScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MovieDetail"
            component={MovieDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BottomNavigation"
            component={BottomNavigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
