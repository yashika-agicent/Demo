// screens/WelcomeScreen.js

import React from "react";
import { View, StyleSheet, Image } from "react-native";
import DemoText, {
  DemoTextFontWeight,
  DemoTextSize,
} from "../../components/CustomText/DemoText";
import COLORS from "../../theme/Color";
import { ImagePaths } from "../../utils/ImagePaths";
import { scale } from "../../theme/Dimension";
import DemoTextInput from "../../components/CustomTextInput/DemoTextInput";
import { useForm } from "react-hook-form";
import DemoButton from "../../components/CustomButton/DemoButton";

export default function WelcomeScreen({ navigation }) {
  const { control } = useForm();

  const onNavigateToGenre = () => {
    navigation.navigate("Genre");
  };
  return (
    <View style={styles.container}>
      <Image
        source={ImagePaths.MOVIEICON}
        style={{ height: scale(35), width: scale(38), marginTop: scale(25) }}
      />
      <View style={{ marginTop: scale(40) }}>
        <DemoText
          color={COLORS.TEXT_BOLD}
          size={DemoTextSize.H1}
          fontWeight={DemoTextFontWeight.Bold}
          style={{ textAlign: "center" }}
        >
          Welcome to My Movies
        </DemoText>

        <DemoText
          color={COLORS.TEXT_BOLD}
          size={DemoTextSize.BMedium}
          fontWeight={DemoTextFontWeight.Bold}
          style={{ textAlign: "center", marginTop: scale(15) }}
        >
          Let's get to know you!
        </DemoText>

        <View style={{ marginTop: scale(20) }}>
          <DemoText
            color={COLORS.TEXT_BOLD}
            size={DemoTextSize.BMedium}
            fontWeight={DemoTextFontWeight.Bold}
            style={{ textAlign: "center", marginTop: scale(15) }}
          >
            Enter your name
          </DemoText>
          <View style={{ marginTop: scale(20) }}>
            <DemoTextInput
              name="firstName"
              control={control}
              placeholder={"Your Name"}
              textInputStyle={{ paddingTop: 0, paddingBottom: 0 }}
              inputTextContainer={{
                borderWidth: 1,
                marginBottom: 0,
                paddingTop: scale(5),
                borderRadius: scale(8),
                paddingBottom: scale(5),
                paddingHorizontal: scale(8),
                backgroundColor: COLORS.WHITE,
                borderColor: COLORS.BORDER_COLOR,
                borderBottomColor: COLORS.BORDER_COLOR,
              }}
            />
          </View>
        </View>
      </View>
      <DemoButton
        label="Next"
        labelSize={DemoTextSize.BPrimary}
        onPress={onNavigateToGenre}
        containerStyle={{
          width: "90%",
          height: scale(45),
          marginTop: scale(4),
          marginBottom: scale(8),
          backgroundColor: COLORS.PRIMARY,
        }}
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
