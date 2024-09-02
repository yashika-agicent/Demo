// hooks/useFonts.js

import { useState, useEffect } from "react";
import * as Font from "expo-font";

export default function useFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "LexendDeca-Black": require("../assets/fonts/LexendDeca-Black.ttf"),
        "LexendDeca-Bold": require("../assets/fonts/LexendDeca-Bold.ttf"),
        "LexendDeca-ExtraBold": require("../assets/fonts/LexendDeca-ExtraBold.ttf"),
        "LexendDeca-ExtraLight": require("../assets/fonts/LexendDeca-ExtraLight.ttf"),
        "LexendDeca-Light": require("../assets/fonts/LexendDeca-Light.ttf"),
        "LexendDeca-Medium": require("../assets/fonts/LexendDeca-Medium.ttf"),
        "LexendDeca-Regular": require("../assets/fonts/LexendDeca-Regular.ttf"),
        "LexendDeca-SemiBold": require("../assets/fonts/LexendDeca-SemiBold.ttf"),
        "LexendDeca-Thin": require("../assets/fonts/LexendDeca-Thin.ttf"),
        // Add more fonts here
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  return fontsLoaded;
}
