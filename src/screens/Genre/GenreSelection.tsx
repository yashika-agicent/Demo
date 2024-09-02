// components/GenreSelection.js

import React from "react";
import { TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { scale } from "../../theme/Dimension";
import COLORS from "../../theme/Color";
import DemoText, {
  DemoTextFontWeight,
  DemoTextSize,
} from "../../components/CustomText/DemoText";

const genres = ["Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi"];

export default function GenreSelection({ selectedGenres, setSelectedGenres }) {
  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((item) => item !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const renderGenreItem = ({ item }) => {
    const isSelected = selectedGenres.includes(item);
    return (
      <TouchableOpacity
        style={[styles.genreItem, isSelected && styles.selectedGenre]}
        onPress={() => toggleGenre(item)}
      >
        <DemoText
          color={isSelected ? COLORS.WHITE : COLORS.BLACK}
          size={DemoTextSize.BPrimary}
          fontWeight={DemoTextFontWeight.Medium}
          style={{ textAlign: "center", paddingVertical: scale(10) }}
        >
          {item}
        </DemoText>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={genres}
      renderItem={renderGenreItem}
      keyExtractor={(item) => item}
      numColumns={3} // Adjust number of columns as needed
      contentContainerStyle={styles.genreList}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  genreList: {
    alignItems: "center",
  },
  genreItem: {
    // padding: 5,
    margin: 5,
    width: scale(85),
    borderRadius: scale(8),
    borderWidth: 0.5,
    borderColor: "#ccc",
  },
  selectedGenre: {
    backgroundColor: COLORS.PRIMARY,
    borderColor: COLORS.PRIMARY,
  },
  selectedGenreText: {
    color: "#fff",
  },
});
