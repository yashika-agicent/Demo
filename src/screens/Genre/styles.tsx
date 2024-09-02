import { Platform, StyleSheet } from "react-native";
import COLORS from "../../theme/Color";
import { scale } from "../../theme/Dimension";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
  },
  headerText: {
    textAlign: "center",
    paddingVertical: scale(13),
    paddingTop: Platform.OS === "android" ? scale(50) : 0,
  },
  genreSelectionContainer: {
    marginTop: "70%",
    height: scale(180),
  },
  buttonContainer: {
    width: "90%",
    height: scale(45),
    marginTop: "36%",
    marginBottom: scale(8),
  },
});
