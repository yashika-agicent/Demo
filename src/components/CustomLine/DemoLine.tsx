import { View } from "react-native";
import COLORS from "../../theme/Color";
import { scale } from "../../theme/Dimension";

const DemoLine = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.BORDER_COLOR,
        height: scale(1),
        width: "100%",
      }}
    />
  );
};

export default DemoLine;
