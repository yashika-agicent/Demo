import { StyleSheet } from "react-native";
import COLORS from "../../theme/Color";
import { scale } from "../../theme/Dimension";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  loader: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: "center",
  },
  headerContainer: {
    paddingVertical: scale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    width: scale(110),
    marginHorizontal: scale(20),
  },
  headerImage: {
    height: scale(20),
    width: scale(20),
    marginTop: scale(25),
  },
  headerText: {
    paddingHorizontal: scale(5),
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: scale(5),
  },
  searchInput: {
    height: scale(30),
    width: scale(180),
    borderColor: COLORS.BORDER_COLOR,
    borderWidth: 1,
    borderRadius: scale(5),
    marginBottom: scale(10),
    paddingHorizontal: scale(10),
  },
  searchIcon: {
    alignSelf: "center",
    margin: scale(5),
    marginBottom: scale(25),
  },
  listContainer: {
    margin: 5,
    padding: 5,
    alignItems: "center",
  },
  movieItem: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
    height: scale(250),
    width: scale(150),
    backgroundColor: COLORS.WHITE,
    borderRadius: scale(10),
    margin: scale(5),
  },
  movieImage: {
    height: scale(190),
    width: scale(140),
    alignSelf: "center",
    marginTop: scale(5),
    borderRadius: scale(10),
  },
  movieTitle: {
    padding: scale(5),
    marginLeft: scale(5),
  },
  movieRating: {
    marginLeft: scale(10),
  },
});
