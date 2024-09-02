import React from "react";
import { FlatList, Image, View } from "react-native";
import COLORS from "../../theme/Color";
import { ImagePaths } from "../../utils/ImagePaths";
import DemoText, {
  DemoTextFontWeight,
  DemoTextSize,
} from "../../components/CustomText/DemoText";
import DemoButton from "../../components/CustomButton/DemoButton";
import DemoLine from "../../components/CustomLine/DemoLine";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../api/Api";
import { styles } from "./styles";

export default function FavoriteScreen({ navigation }) {
  const onBack = () => {
    navigation.goBack();
  };

  const favoriteMovies = useSelector((state) => state?.favorites?.movies);

  const renderFavoriteMovies = ({ item }) => (
    <View style={styles.movieItem}>
      <Image
        source={{ uri: `${BASE_URL}${item?.large_cover_image}` }}
        style={styles.movieImage}
      />
      <View style={styles.movieDetails}>
        <DemoText
          color={COLORS.TEXT_BOLD}
          size={DemoTextSize.H1}
          fontWeight={DemoTextFontWeight.Medium}
          style={styles.movieTitle}
        >
          {item?.title}
        </DemoText>
        <DemoText
          color={COLORS.T1}
          size={DemoTextSize.BSmall}
          fontWeight={DemoTextFontWeight.SemiBold}
          style={styles.movieGenres}
        >
          {item?.genres?.join(", ")}
        </DemoText>
        <DemoText
          color={COLORS.TEXT_BOLD}
          size={DemoTextSize.BSmall}
          fontWeight={DemoTextFontWeight.SemiBold}
          style={styles.movieDescription}
        >
          {item?.description_full}
        </DemoText>
        <View style={styles.buttonContainer}>
          <DemoButton
            label="View Details"
            labelSize={DemoTextSize.BSmall}
            onPress={() => console.log("In development")}
            containerStyle={styles.button}
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
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
            Favorite Movies
          </DemoText>
        </View>

        <DemoButton
          label="Back"
          labelSize={DemoTextSize.BSmall}
          onPress={onBack}
          containerStyle={styles.backButton}
        />
      </View>
      <DemoLine />

      <FlatList
        data={favoriteMovies}
        renderItem={renderFavoriteMovies}
        keyExtractor={(item) => item?.id?.toString()}
      />
    </View>
  );
}
