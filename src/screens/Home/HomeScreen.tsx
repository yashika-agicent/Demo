// screens/HomeScreen.js

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
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
export default function HomeScreen() {
  const movies = movieData?.data?.movies;
  const navigation = useNavigation();
  const renderMovieItem = () => {
    const navigateToMovieDetail = () => {
      navigation.navigate("MovieDetail");
    };
    return (
      <TouchableOpacity
        style={{
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
        }}
        onPress={navigateToMovieDetail}
      >
        <Image
          source={ImagePaths.DUMMYMOVIEIMG}
          style={{
            height: scale(190),
            width: scale(140),
            alignSelf: "center",
            marginTop: scale(5),
            borderRadius: scale(10),
          }}
        />
        <DemoText
          color={COLORS.TEXT_BOLD}
          size={DemoTextSize.BMedium}
          fontWeight={DemoTextFontWeight.SemiBold}
          style={{ padding: scale(5), marginLeft: scale(5) }}
        >
          Inception
        </DemoText>
        <DemoText
          color={COLORS.TEXT_PLACEHOLDER}
          size={DemoTextSize.BSmall}
          fontWeight={DemoTextFontWeight.Regular}
          style={{ marginLeft: scale(10) }}
        >
          Rating: 8.8
        </DemoText>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{ paddingVertical: scale(10) }}>
        <View
          style={{
            flexDirection: "row",
            width: scale(110),
            marginHorizontal: scale(20),
          }}
        >
          <Image
            source={ImagePaths.MOVIEVERTICALBLACK}
            style={{
              height: scale(20),
              width: scale(20),
              marginTop: scale(25),
            }}
          />
          <DemoText
            color={COLORS.TEXT_BOLD}
            size={DemoTextSize.H1}
            fontWeight={DemoTextFontWeight.Bold}
            style={{ paddingHorizontal: scale(5) }}
          >
            My Movies
          </DemoText>
        </View>
      </View>
      <DemoLine />
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item}
        numColumns={2} // Adjust number of columns as needed
        contentContainerStyle={{
          margin: 5,
          padding: 5,
          alignItems: "center",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  text: {
    fontSize: 24,
  },
});
