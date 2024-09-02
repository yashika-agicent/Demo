import { StyleSheet } from "react-native";
import COLORS from "../../theme/Color";
import { scale } from "../../theme/Dimension";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  header: {
    flexDirection: "row",
    paddingVertical: scale(15),
    justifyContent: "space-between",
    marginHorizontal: scale(16),
  },
  headerContent: {
    flexDirection: "row",
  },
  headerImage: {
    height: scale(25),
    width: scale(25),
    alignSelf: "center",
  },
  headerText: {
    paddingHorizontal: scale(5),
    alignSelf: "center",
  },
  backButton: {
    height: scale(36),
    backgroundColor: COLORS.PRIMARY,
    width: scale(70),
  },
  movieItem: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
    padding: scale(12),
    width: "92%",
    backgroundColor: COLORS.WHITE,
    borderRadius: scale(10),
    margin: scale(5),
    flexDirection: "row",
    alignSelf: "center",
    marginTop: scale(12),
  },
  movieImage: {
    height: scale(150),
    width: scale(100),
    marginTop: scale(5),
    borderRadius: scale(20),
    marginHorizontal: scale(8),
  },
  movieDetails: {
    width: scale(200),
  },
  movieTitle: {
    padding: scale(5),
    marginLeft: scale(5),
  },
  movieGenres: {
    marginLeft: scale(10),
  },
  movieDescription: {
    marginLeft: scale(10),
    marginTop: scale(5),
  },
  buttonContainer: {
    marginTop: scale(8),
  },
  button: {
    height: scale(25),
    backgroundColor: COLORS.PRIMARY,
    borderRadius: scale(12),
    width: scale(180),
  },
});
