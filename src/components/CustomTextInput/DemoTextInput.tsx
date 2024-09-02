import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { Control, Controller } from "react-hook-form";
import COLORS from "../../theme/Color";
import styles from "./styles";
import DemoText, {
  DemoTextFontWeight,
  DemoTextSize,
} from "../CustomText/DemoText";

type ControlledInputProps = {
  name: string;
  label?: string;
  control: Control;
  noValidateCheck?: boolean;
  textInputStyle?: ViewStyle;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  pressRightIcon?: () => void;
  customContainer?: ViewStyle;
  inputTextContainer?: ViewStyle;
} & TextInputProps;

const DemoTextInput = ({
  name,
  label,
  control,
  leftIcon,
  rightIcon,
  pressRightIcon,
  textInputStyle,
  customContainer,
  inputTextContainer,
  noValidateCheck = false,
  ...textInputProps
}: ControlledInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        validate: (value) => {
          if (noValidateCheck) return true;
          return !(!value || +value === 0);
        },
      }}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error, invalid },
      }) => {
        return (
          <View style={[styles.container, customContainer]}>
            {!!label && (
              <DemoText
                color={COLORS.TEXT_BOLD}
                fontWeight={DemoTextFontWeight.Medium}
              >
                {label}
              </DemoText>
            )}

            <View
              style={[
                styles.inputContainer,
                {
                  borderBottomColor: invalid
                    ? COLORS.ERROR
                    : COLORS.BORDER_COLOR,
                },
                inputTextContainer,
              ]}
            >
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                style={[styles.input, textInputStyle]}
                placeholderTextColor={COLORS.TEXT_PLACEHOLDER}
                {...textInputProps}
              />
            </View>
            {error?.message ? (
              <DemoText
                color={COLORS.ERROR}
                style={styles.errorMsg}
                size={DemoTextSize.BSmall}
              >
                {error.message}
              </DemoText>
            ) : null}
          </View>
        );
      }}
    />
  );
};

export default DemoTextInput;
