// screens/HomeScreen.js

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Platform,
} from "react-native";
import { ImagePaths } from "../../utils/ImagePaths";
import { scale } from "../../theme/Dimension";
import COLORS from "../../theme/Color";
import DemoText, {
  DemoTextFontWeight,
  DemoTextSize,
} from "../../components/CustomText/DemoText";
import DemoLine from "../../components/CustomLine/DemoLine";
import { fetchMoviesApi } from "../../api/MovieApi";
import { BASE_URL } from "../../api/Api";
import { useDispatch } from "react-redux";
import { addToFavorite, deleteAllFavorite } from "../../redux/favoriteSlice";
import { styles } from "./styles";

export default function HomeScreen({ navigation, route }) {
  const params = route.params || {};
  const selectedGenres = Object.values(params);
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchMovieList();
  }, []);

  const fetchMovieList = async () => {
    setIsLoading(true);
    const response = await fetchMoviesApi();

    const { data, message, status } = response.data;

    if (!status) {
      alert(`${message}`);
      setIsLoading(false);
    } else {
      setMovieData(response.data.data.movies);
      setIsLoading(false);
    }
  };

  const navigateToMovieDetail = (movieObject) => {
    navigation.navigate("MovieDetail", { movieData: movieObject });
  };
  const renderMovieItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.movieItem}
        onPress={() => navigateToMovieDetail(item)}
      >
        <Image
          source={{ uri: `${BASE_URL}${item?.large_cover_image}` }}
          style={styles.movieImage}
        />
        <DemoText
          color={COLORS.TEXT_BOLD}
          size={DemoTextSize.BMedium}
          fontWeight={DemoTextFontWeight.SemiBold}
          style={styles.movieTitle}
        >
          {item.title.length > 11
            ? `${item.title.slice(0, 11)}...`
            : item.title}
        </DemoText>
        <DemoText
          color={COLORS.TEXT_PLACEHOLDER}
          size={DemoTextSize.BSmall}
          fontWeight={DemoTextFontWeight.Regular}
          style={styles.movieRating}
        >
          Rating: {item.rating}
        </DemoText>
      </TouchableOpacity>
    );
  };

  const filteredMovies = movieData
    .filter((movie) =>
      selectedGenres.some((genre) => movie.genres.includes(genre))
    )
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Image
            source={ImagePaths.MOVIEVERTICALBLACK}
            style={styles.headerImage}
          />
          <DemoText
            color={COLORS.TEXT_BOLD}
            size={DemoTextSize.H1}
            fontWeight={DemoTextFontWeight.Bold}
            style={styles.headerText}
          >
            My Movies
          </DemoText>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
          <Image
            source={ImagePaths.MAGNIFYINGGLASS}
            style={styles.searchIcon}
          />
        </View>
      </View>
      <DemoLine />

      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={COLORS.PRIMARY}
          style={styles.loader}
        />
      ) : (
        <FlatList
          data={filteredMovies}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}
