import { TouchableOpacity, Text, View } from "react-native";

const ListItem = ({ item, goToDetailsCallback }) => {
  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', justifyContent: 'space-between' }}
      onPress={() => goToDetailsCallback(item.id)}>
      <View>
        <Text style={{ fontSize: 18 }}>{item.title}</Text>
        <Text style={{ marginTop: 15, color: '#707070' }}>{item.subTitle}</Text>
      </View>
      <TouchableOpacity style={{ justifyContent: 'center' }}>
        <Text style={{ color: '#ff4040' }}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ListItem;
