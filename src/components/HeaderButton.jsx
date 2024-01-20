import { TouchableOpacity, Text } from "react-native";

const HeaderButton = ({ onPressCallback, title }) => {
  return (
    <TouchableOpacity
      style={{ justifyContent: 'center', alignItems: 'center', marginRight: 20 }}
      onPress={() => onPressCallback()}>
      <Text style={{ fontSize: 16 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;
