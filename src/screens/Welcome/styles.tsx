import { StyleSheet } from "react-native";
import COLORS from "../../theme/Color";
import { scale } from "../../theme/Dimension";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
  },
  icon: {
    height: scale(35),
    width: scale(38),
    marginTop: scale(50),
  },
  textContainer: {
    marginTop: scale(40),
  },
  titleText: {
    textAlign: "center",
  },
  subTitleText: {
    textAlign: "center",
    marginTop: scale(15),
  },
  inputContainer: {
    marginTop: scale(20),
  },
  inputLabel: {
    textAlign: "center",
    marginTop: scale(15),
  },
  textInputWrapper: {
    marginTop: scale(20),
  },
  textInput: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  inputTextContainer: {
    borderWidth: 1,
    marginBottom: 0,
    paddingTop: scale(5),
    borderRadius: scale(8),
    paddingBottom: scale(5),
    paddingHorizontal: scale(8),
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.BORDER_COLOR,
    borderBottomColor: COLORS.BORDER_COLOR,
  },
  buttonContainer: {
    width: "90%",
    height: scale(45),
    marginTop: scale(10),
    marginBottom: scale(8),
  },
});
