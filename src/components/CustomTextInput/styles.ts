import { StyleSheet } from "react-native";
import { Fonts, scale } from "../../theme/Dimension";
import COLORS from "../../theme/Color";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: scale(5),
  },

  errorMsg: {
    width: "100%",
    paddingLeft: scale(10),
    marginBottom: scale(10),
    marginVertical: scale(5),
  },

  inputContainer: {
    width: "100%",
    marginTop: scale(4),
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    marginBottom: scale(10),
    paddingBottom: scale(2),
  },

  input: {
    width: "90%",
    fontSize: scale(14),
    color: COLORS.BLACK,
    fontFamily: Fonts.Medium,
    paddingHorizontal: scale(4),
  },

  labelTextStyle: {
    marginTop: scale(10),
  },
});

export default styles;
