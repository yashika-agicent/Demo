import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

const scale = (size) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

const verticalScale = (size) => (WINDOW_HEIGHT / guidelineBaseHeight) * size;

const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const Spacing = {
  xxxxSmall: scale(2),
  xxxSmall: scale(4),
  xxSmall: scale(8),
  xSmall: scale(12),
  small: scale(16),
  regular: scale(20),
  large: scale(24),
  xLarge: scale(28),
  xxLarge: scale(32),
  xxxLarge: scale(36),
  extraLarge: scale(48),
};

const Sizes = {
  2: scale(2),
  4: scale(4),
  8: scale(8),
  12: scale(12),
  16: scale(16),
  20: scale(20),
  24: scale(24),
  28: scale(28),
  32: scale(32),
  36: scale(36),
  40: scale(40),
  44: scale(44),
  48: scale(48),
};

const FontSizes = {
  8: scale(8),
  10: scale(10),
  12: scale(12),
  14: scale(14),
  16: scale(16),
  18: scale(18),
  20: scale(20),
  24: scale(24),
  28: scale(28),
  32: scale(32),
  36: scale(36),
  40: scale(40),
};

const Fonts = {
  Light: "LexendDeca-Light",
  Regular: "LexendDeca-Regular",
  Medium: "LexendDeca-Medium",
  Semibold: "LexendDeca-SemiBold",
  Bold: "LexendDeca-Bold",
  Black: "LexendDeca-Black",
  ExtraBold: "LexendDeca-ExtraBold",
  ExtraLight: "LexendDeca-ExtraLight",
  Thin: "LexendDeca-Thin",
};

export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
  Spacing,
  Sizes,
  Fonts,
  FontSizes,
  scale,
  verticalScale,
  moderateScale,
};
