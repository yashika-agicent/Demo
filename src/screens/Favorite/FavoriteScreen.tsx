import { Image, StyleSheet, Text, View } from "react-native";
import COLORS from "../../theme/Color";
import { scale } from "../../theme/Dimension";
import { ImagePaths } from "../../utils/ImagePaths";
import DemoText, {
  DemoTextFontWeight,
  DemoTextSize,
} from "../../components/CustomText/DemoText";
import DemoButton from "../../components/CustomButton/DemoButton";
import DemoLine from "../../components/CustomLine/DemoLine";

export default function FavoriteScreen({ navigation }) {
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: scale(15),
          justifyContent: "space-between",
          marginHorizontal: scale(16),
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={ImagePaths.MOVIEVERTICALBLACK}
            style={{
              height: scale(25),
              width: scale(25),
              alignSelf: "center",
            }}
          />
          <DemoText
            color={COLORS.TEXT_BOLD}
            size={DemoTextSize.H1}
            fontWeight={DemoTextFontWeight.Bold}
            style={{ paddingHorizontal: scale(5), alignSelf: "center" }}
          >
            Favorite Movies
          </DemoText>
        </View>

        <DemoButton
          label="Back"
          labelSize={DemoTextSize.BSmall}
          onPress={onBack}
          containerStyle={{
            height: scale(36),
            backgroundColor: COLORS.PRIMARY,
            width: scale(70),
          }}
        />
      </View>
      <DemoLine />

      <View
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 1,
          elevation: 5,
          height: scale(210),
          width: "92%",
          backgroundColor: COLORS.WHITE,
          borderRadius: scale(10),
          margin: scale(5),
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        <Image
          source={ImagePaths.DUMMYMOVIEIMG}
          style={{
            height: scale(150),
            width: scale(100),
            marginTop: scale(5),
            borderRadius: scale(20),
            marginHorizontal: scale(8),
          }}
        />
        <View style={{ width: scale(200) }}>
          <DemoText
            color={COLORS.TEXT_BOLD}
            size={DemoTextSize.H1}
            fontWeight={DemoTextFontWeight.Medium}
            style={{ padding: scale(5), marginLeft: scale(5) }}
          >
            The Shawshank Redemption
          </DemoText>
          <DemoText
            color={COLORS.T1}
            size={DemoTextSize.BSmall}
            fontWeight={DemoTextFontWeight.SemiBold}
            style={{ marginLeft: scale(10) }}
          >
            Drama, Crime | 1994
          </DemoText>
          <DemoText
            color={COLORS.TEXT_BOLD}
            size={DemoTextSize.BSmall}
            fontWeight={DemoTextFontWeight.SemiBold}
            style={{ marginLeft: scale(10), marginTop: scale(5) }}
          >
            Two imprisomned men bond over a number of years, finding solace and
            eventual redemption thorugh actos of common decency.
          </DemoText>
          <View style={{ marginTop: scale(8) }}>
            <DemoButton
              label="View Details"
              labelSize={DemoTextSize.BSmall}
              onPress={onBack}
              containerStyle={{
                height: scale(25),
                backgroundColor: COLORS.PRIMARY,
                borderRadius: scale(12),
              }}
            />
          </View>
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
