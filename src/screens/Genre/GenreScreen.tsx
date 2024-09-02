// screens/GenreScreen.js

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import COLORS from "../../theme/Color";
import DemoText, {
  DemoTextFontWeight,
  DemoTextSize,
} from "../../components/CustomText/DemoText";
import { scale } from "../../theme/Dimension";
import DemoLine from "../../components/CustomLine/DemoLine";
import GenreSelection from "./GenreSelection";
import DemoButton from "../../components/CustomButton/DemoButton";

export default function GenreScreen({ navigation }) {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const onNavigateToHome = () => {
    navigation.navigate("BottomNavigation");
  };
  return (
    <View style={styles.container}>
      <DemoText
        color={COLORS.TEXT_BOLD}
        size={DemoTextSize.H2}
        fontWeight={DemoTextFontWeight.Bold}
        style={{ textAlign: "center", paddingVertical: scale(13) }}
      >
        Select Your Favorite Genres
      </DemoText>
      <DemoLine />

      <View style={{ marginTop: "70%", height: scale(180) }}>
        <GenreSelection
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
      </View>
      <DemoButton
        label="Next"
        labelSize={DemoTextSize.BPrimary}
        onPress={onNavigateToHome}
        containerStyle={{
          width: "90%",
          height: scale(45),
          marginTop: "36%",
          marginBottom: scale(8),
          backgroundColor:
            selectedGenres.length === 0 ? COLORS.BORDER_COLOR : COLORS.PRIMARY,
        }}
        disabled={selectedGenres.length === 0 ? true : false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
  },
  text: {
    fontSize: 24,
  },
});
