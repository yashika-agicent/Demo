// screens/MovieDetail.js

import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import { scale } from "../../theme/Dimension";
import { ImagePaths } from "../../utils/ImagePaths";
import DemoText, {
  DemoTextFontWeight,
  DemoTextSize,
} from "../../components/CustomText/DemoText";
import COLORS from "../../theme/Color";
import DemoLine from "../../components/CustomLine/DemoLine";
import DemoButton from "../../components/CustomButton/DemoButton";
import { BASE_URL } from "../../api/Api";
import { useDispatch, useSelector } from "react-redux";
import { checkIsFavorite, formatDate } from "../../utils";
import { addToFavorite } from "../../redux/favoriteSlice";
import { styles } from "./styles";

export default function MovieDetail({ navigation, route }) {
  const { movieData } = route.params;

  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state?.favorites?.movies);

  function handleAddToFavorite(movieData: Object) {
    if (checkIsFavorite(favoriteMovies, movieData)) {
      alert("Movie already added to favorites");
    } else {
      dispatch(addToFavorite(movieData));
      alert("Movie added to favorites");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={ImagePaths.MOVIEVERTICALBLACK}
          style={styles.headerImage}
        />
        <DemoText
          color={COLORS.TEXT_BOLD}
          size={DemoTextSize.H1}
          fontWeight={DemoTextFontWeight.SemiBold}
          style={styles.headerText}
        >
          My Movies
        </DemoText>
      </View>

      <DemoLine />

      <View style={styles.movieDetailsContainer}>
        <Image
          source={{ uri: `${BASE_URL}${movieData?.large_cover_image}` }}
          style={styles.movieImage}
        />
        <DemoText
          color={COLORS.TEXT_BOLD}
          size={DemoTextSize.H1}
          fontWeight={DemoTextFontWeight.Bold}
          style={styles.movieTitle}
        >
          {movieData.title}
        </DemoText>

        <DemoText
          color={COLORS.TEXT_BOLD}
          size={DemoTextSize.BPrimary}
          fontWeight={DemoTextFontWeight.Medium}
          style={styles.movieDescription}
        >
          {movieData.description_full}
        </DemoText>

        <View style={styles.infoContainer}>
          <DemoText
            color={COLORS.T1}
            size={DemoTextSize.BPrimary}
            fontWeight={DemoTextFontWeight.Regular}
          >
            Release Date:
          </DemoText>
          <DemoText
            color={COLORS.TEXT_BOLD}
            size={DemoTextSize.BPrimary}
            fontWeight={DemoTextFontWeight.Medium}
          >
            {formatDate(movieData.date_uploaded)}
          </DemoText>
        </View>
        <View style={styles.infoContainer}>
          <DemoText
            color={COLORS.TEXT_BOLD}
            size={DemoTextSize.BPrimary}
            fontWeight={DemoTextFontWeight.Regular}
          >
            Genre:
          </DemoText>
          <DemoText
            color={COLORS.TEXT_BOLD}
            size={DemoTextSize.BPrimary}
            fontWeight={DemoTextFontWeight.Medium}
            style={{ width: "40%", textAlign: "left" }}
          >
            {movieData.genres.join(", ")}
          </DemoText>
        </View>

        <View style={styles.buttonContainer}>
          <DemoButton
            label="Mark as Favorite"
            labelSize={DemoTextSize.BPrimary}
            onPress={() => handleAddToFavorite(movieData)}
            containerStyle={styles.button}
          />
        </View>
      </View>
    </View>
  );
}
