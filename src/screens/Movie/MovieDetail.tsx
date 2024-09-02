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

export default function MovieDetail() {
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
          source={ImagePaths.DUMMYMOVIEIMG}
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
          The Matrix
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
          A computer hacker learns from mysterious rebels about the true nature
          of his reality and his role in the war against its controllers.
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
            March 31, 1999
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
            Action, Sci-Fi
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
