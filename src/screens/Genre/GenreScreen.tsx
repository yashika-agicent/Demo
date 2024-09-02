// screens/GenreScreen.js

import React, { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import COLORS from "../../theme/Color";
import DemoText, {
  DemoTextFontWeight,
  DemoTextSize,
} from "../../components/CustomText/DemoText";
import { scale } from "../../theme/Dimension";
import DemoLine from "../../components/CustomLine/DemoLine";
import GenreSelection from "./GenreSelection";
import DemoButton from "../../components/CustomButton/DemoButton";
import { styles } from "./styles";

export default function GenreScreen({ navigation }) {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const onNavigateToHome = () => {
    navigation.navigate("BottomNavigation", {
      screen: "Home",
      params: selectedGenres,
    });
  };

  return (
    <View style={styles.container}>
      <DemoText
        color={COLORS.TEXT_BOLD}
        size={DemoTextSize.H2}
        fontWeight={DemoTextFontWeight.Bold}
        style={styles.headerText}
      >
        Select Your Favorite Genres
      </DemoText>
      <DemoLine />

      <View style={styles.genreSelectionContainer}>
        <GenreSelection
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
      </View>

      <DemoButton
        label="Next"
        labelSize={DemoTextSize.BPrimary}
        onPress={onNavigateToHome}
        containerStyle={[
          styles.buttonContainer,
          {
            backgroundColor:
              selectedGenres.length === 0
                ? COLORS.BORDER_COLOR
                : COLORS.PRIMARY,
          },
        ]}
        disabled={selectedGenres.length === 0}
      />
    </View>
  );
}
