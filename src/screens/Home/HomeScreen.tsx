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
} from "react-native";
import { ImagePaths } from "../../utils/ImagePaths";
import { scale } from "../../theme/Dimension";
import COLORS from "../../theme/Color";
import DemoText, {
  DemoTextFontWeight,
  DemoTextSize,
} from "../../components/CustomText/DemoText";
import DemoLine from "../../components/CustomLine/DemoLine";
import movieData from "./movie.json";
import { useNavigation } from "@react-navigation/native";
import { fetchMoviesApi } from "../../api/MovieApi";
import { BASE_URL } from "../../api/Api";
export default function HomeScreen() {
  const navigation = useNavigation();

  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchMovieList();
  }, []);

  const fetchMovieList = async () => {
    console.log("In fetch Movies");
    setIsLoading(true);
    const response = await fetchMoviesApi();

    const { data, message, status } = response.data;

    if (!status) {
      alert(`${message}`);
      setIsLoading(false);
    } else {
      console.log(
        "🚀 ~ fetchMovieList ~ response.data.movies:",
        response.data.data?.movies
      );
      setMovieData(response.data.data.movies);
      setIsLoading(false);
    }
  };

  const renderMovieItem = ({ item, index }) => {
    console.log("🚀 ~ renderMovieItem ~ item:", item);
    const navigateToMovieDetail = () => {
      navigation.navigate("MovieDetail", { movieData: item });
    };

    return (
      <TouchableOpacity
        style={styles.movieItem}
        onPress={navigateToMovieDetail}
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

  const filteredMovies = movieData.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <View style={{ paddingVertical: scale(10), flexDirection: "row" }}>
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
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            marginRight: scale(5),
          }}
        >
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
          <Image
            source={ImagePaths.MAGNIFYINGGLASS}
            style={{
              alignSelf: "center",
              margin: scale(5),
              marginBottom: scale(25),
            }}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  loader: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    width: scale(110),
    marginHorizontal: scale(20),
  },
  headerImage: {
    height: scale(20),
    width: scale(20),
    marginTop: scale(25),
  },
  headerText: {
    paddingHorizontal: scale(5),
  },
  searchInput: {
    height: scale(30),
    width: scale(180),
    borderColor: COLORS.BORDER_COLOR,
    borderWidth: 1,
    borderRadius: scale(5),
    marginBottom: scale(10),
    paddingHorizontal: scale(10),
  },
  listContainer: {
    margin: 5,
    padding: 5,
    alignItems: "center",
  },
  movieItem: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
    height: scale(250),
    width: scale(150),
    backgroundColor: COLORS.WHITE,
    borderRadius: scale(10),
    margin: scale(5),
  },
  movieImage: {
    height: scale(190),
    width: scale(140),
    alignSelf: "center",
    marginTop: scale(5),
    borderRadius: scale(10),
  },
  movieTitle: {
    padding: scale(5),
    marginLeft: scale(5),
  },
  movieRating: {
    marginLeft: scale(10),
  },
});
