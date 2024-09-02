import React from "react";
import { Text, TextProps, TextStyle } from "react-native";
import styles from "./styles";
import COLORS from "../../theme/Color";

export enum DemoTextSize {
  BTiny = "BTiny",
  BSmall = "BSmall",
  BPrimary = "BPrimary",
  BMedium = "BMedium",
  H3 = "H3",
  H2 = "H2",
  H1 = "H1",
  T1 = "T1",
}

export enum DemoTextFontWeight {
  Regular = "Regular",
  Medium = "Medium",
  SemiBold = "SemiBold",
  Bold = "Bold",
}

export interface IAucTextProps extends TextProps {
  style?: TextStyle | TextStyle[];
  children?: string | React.ReactNode;
  size?: DemoTextSize;
  fontWeight?: DemoTextFontWeight;
  color?: string;
  gradient?: Array<string>;
}

export default function DemoText(props: IAucTextProps) {
  const {
    style,
    size = DemoTextSize.BPrimary,
    fontWeight = DemoTextFontWeight.Regular,
    children,
    color = COLORS.PRIMARY,
    ...rest
  } = props;

  const variantStyle = styles[size];

  const fontWeightStyle = styles[fontWeight];

  const finalStyle = [
    styles.commonStyle,
    variantStyle,
    fontWeightStyle,
    { color },
    style,
  ];

  return (
    <Text {...rest} style={finalStyle}>
      {children}
    </Text>
  );
}
