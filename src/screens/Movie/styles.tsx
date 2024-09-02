import { StyleSheet } from "react-native";
import COLORS from "../../theme/Color";
import { scale } from "../../theme/Dimension";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: scale(15),
  },
  headerImage: {
    height: scale(20),
    width: scale(20),
    alignSelf: "center",
  },
  headerText: {
    paddingHorizontal: scale(10),
  },
  movieDetailsContainer: {
    marginTop: scale(5),
    marginHorizontal: scale(16),
  },
  movieImage: {
    height: scale(220),
    width: scale(160),
    alignSelf: "center",
    marginTop: scale(5),
    borderTopLeftRadius: scale(15),
    borderTopRightRadius: scale(15),
  },
  movieTitle: {
    textAlign: "center",
    marginTop: scale(25),
  },
  movieDescription: {
    marginTop: scale(18),
    lineHeight: scale(22),
  },
  infoContainer: {
    marginTop: scale(25),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: scale(45),
    marginTop: scale(50),
    marginBottom: scale(8),
    backgroundColor: COLORS.PRIMARY,
  },
});
