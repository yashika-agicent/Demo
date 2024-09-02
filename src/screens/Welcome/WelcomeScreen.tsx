// screens/WelcomeScreen.js

import React from "react";
import { View, Image } from "react-native";
import DemoText, {
  DemoTextFontWeight,
  DemoTextSize,
} from "../../components/CustomText/DemoText";
import COLORS from "../../theme/Color";
import { ImagePaths } from "../../utils/ImagePaths";
import DemoTextInput from "../../components/CustomTextInput/DemoTextInput";
import { useForm } from "react-hook-form";
import DemoButton from "../../components/CustomButton/DemoButton";
import { styles } from "./styles";

export default function WelcomeScreen({ navigation }) {
  const { control, watch } = useForm({
    defaultValues: {
      name: "",
    },
  });
  const nameValue = watch("name");

  const onNavigateToGenre = () => {
    navigation.navigate("Genre");
  };

  return (
    <View style={styles.container}>
      <Image source={ImagePaths.MOVIEICON} style={styles.icon} />
      <View style={styles.textContainer}>
        <DemoText
          color={COLORS.TEXT_BOLD}
          size={DemoTextSize.H1}
          fontWeight={DemoTextFontWeight.Bold}
          style={styles.titleText}
        >
          Welcome to My Movies
        </DemoText>

        <DemoText
          color={COLORS.TEXT_BOLD}
          size={DemoTextSize.BMedium}
          fontWeight={DemoTextFontWeight.Bold}
          style={styles.subTitleText}
        >
          Let's get to know you!
        </DemoText>

        <View style={styles.inputContainer}>
          <DemoText
            color={COLORS.TEXT_BOLD}
            size={DemoTextSize.BMedium}
            fontWeight={DemoTextFontWeight.Bold}
            style={styles.inputLabel}
          >
            Enter your name
          </DemoText>
          <View style={styles.textInputWrapper}>
            <DemoTextInput
              name="name"
              control={control}
              placeholder={"Your Name"}
              textInputStyle={styles.textInput}
              inputTextContainer={styles.inputTextContainer}
            />
          </View>
        </View>
      </View>
      <DemoButton
        label="Next"
        labelSize={DemoTextSize.BPrimary}
        onPress={onNavigateToGenre}
        containerStyle={[
          styles.buttonContainer,
          {
            backgroundColor: !nameValue ? COLORS.BORDER_COLOR : COLORS.PRIMARY,
          },
        ]}
        disabled={!nameValue} // Update this condition based on your logic
      />
    </View>
  );
}
