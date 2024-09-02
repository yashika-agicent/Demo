import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React, { ReactElement } from "react";
import DemoText, {
  DemoTextFontWeight,
  DemoTextSize,
} from "../CustomText/DemoText";
import { scale } from "../../theme/Dimension";
import COLORS from "../../theme/Color";

type Props = {
  label?: string;
  onPress: () => void;
  disabled?: boolean;
  color?: string;
  labelColor?: string;
  containerStyle?: ViewStyle;
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactElement;
  labelSize?: DemoTextSize;
};

const DemoButton = ({
  containerStyle,
  label = "button",
  color = COLORS.PRIMARY,
  labelColor = COLORS.WHITE,
  onPress,
  leftIcon,
  isDisabled,
  isLoading,
  labelSize = DemoTextSize.H3,
  disabled = false,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: isDisabled ? "red" : color },
        containerStyle,
      ]}
      disabled={disabled}
    >
      {isLoading && <ActivityIndicator color={COLORS.WHITE} />}
      {leftIcon}
      {!isLoading && (
        <DemoText
          color={labelColor}
          size={labelSize}
          fontWeight={DemoTextFontWeight.Medium}
        >
          {label}
        </DemoText>
      )}
    </TouchableOpacity>
  );
};

export default DemoButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: scale(50),
    columnGap: scale(5),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: scale(5),
    justifyContent: "center",
  },
});
