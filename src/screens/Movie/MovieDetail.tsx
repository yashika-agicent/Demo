import { Image, StyleSheet, Text, View } from "react-native";
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

export default function MovieDetail({ navigation, route }) {
  const { movieData } = route.params;
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Array of month names
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Extract the month, day, and year
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    // Format the date as "Month, Day Year"
    return `${month} ${day}, ${year}`;
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingVertical: scale(15),
        }}
      >
        <Image
          source={ImagePaths.MOVIEVERTICALBLACK}
          style={{
            height: scale(20),
            width: scale(20),
            alignSelf: "center",
          }}
        />
        <DemoText
          color={COLORS.TEXT_BOLD}
          size={DemoTextSize.H1}
          fontWeight={DemoTextFontWeight.SemiBold}
          style={{ paddingHorizontal: scale(10) }}
        >
          My Movies
        </DemoText>
      </View>

      <DemoLine />

      <View
        style={{
          marginTop: scale(5),
          marginHorizontal: scale(16),
        }}
      >
        <Image
          source={{ uri: `${BASE_URL}${movieData?.large_cover_image}` }}
          style={{
            height: scale(220),
            width: scale(160),
            alignSelf: "center",
            marginTop: scale(5),
            borderTopLeftRadius: scale(15),
            borderTopRightRadius: scale(15),
          }}
        />
        <DemoText
          color={COLORS.TEXT_BOLD}
          size={DemoTextSize.H1}
          fontWeight={DemoTextFontWeight.Bold}
          style={{ textAlign: "center", marginTop: scale(25) }}
        >
          {movieData.title}
        </DemoText>

        <DemoText
          color={COLORS.TEXT_BOLD}
          size={DemoTextSize.BPrimary}
          fontWeight={DemoTextFontWeight.Medium}
          style={{
            marginTop: scale(18),
            lineHeight: scale(22),
          }}
        >
          {movieData.description_full}
        </DemoText>

        <View
          style={{
            marginTop: scale(25),
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <DemoText
            color={COLORS.T1}
            size={DemoTextSize.BPrimary}
            fontWeight={DemoTextFontWeight.Regular}
            style={{}}
          >
            Release Date:
          </DemoText>
          <DemoText
            color={COLORS.TEXT_BOLD}
            size={DemoTextSize.BPrimary}
            fontWeight={DemoTextFontWeight.Medium}
            style={{}}
          >
            {formatDate(movieData.date_uploaded)}
          </DemoText>
        </View>
        <View
          style={{
            marginTop: scale(25),
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <DemoText
            color={COLORS.TEXT_BOLD}
            size={DemoTextSize.BPrimary}
            fontWeight={DemoTextFontWeight.Regular}
            style={{}}
          >
            Genre:
          </DemoText>
          <DemoText
            color={COLORS.TEXT_BOLD}
            size={DemoTextSize.BPrimary}
            fontWeight={DemoTextFontWeight.Medium}
            style={{}}
          >
            {movieData.genres.join(", ")}
          </DemoText>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <DemoButton
            label="Mark as Favorite"
            labelSize={DemoTextSize.BPrimary}
            // onPress={onMarkAsFavourite}
            containerStyle={{
              height: scale(45),
              marginTop: scale(50),
              marginBottom: scale(8),
              backgroundColor: COLORS.PRIMARY,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    // alignItems: "center",
  },
});
