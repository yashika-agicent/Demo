import { StyleSheet } from "react-native";
import { FontSizes, Fonts } from "../../theme/Dimension";

const styles = StyleSheet.create({
  commonStyle: {
    fontFamily: Fonts.Regular,
  },

  BTiny: {
    fontSize: FontSizes[10],
    lineHeight: FontSizes[14],
  },

  BSmall: {
    fontSize: FontSizes[12],
    lineHeight: FontSizes[16],
  },

  BPrimary: {
    fontSize: FontSizes[14],
    lineHeight: FontSizes[18],
  },

  BMedium: {
    fontSize: FontSizes[16],
    lineHeight: FontSizes[20],
  },

  H3: {
    fontSize: FontSizes[18],
    lineHeight: FontSizes[20],
  },

  H2: {
    fontSize: FontSizes[20],
    lineHeight: FontSizes[24],
  },

  H1: {
    fontSize: FontSizes[24],
    lineHeight: FontSizes[28],
  },

  T1: {
    fontSize: FontSizes[32],
    lineHeight: FontSizes[36],
  },

  Regular: {
    fontFamily: Fonts.Regular,
  },

  Medium: {
    fontFamily: Fonts.Medium,
  },

  SemiBold: {
    fontFamily: Fonts.Semibold,
  },

  Bold: {
    fontFamily: Fonts.Bold,
  },
});

export default styles;
