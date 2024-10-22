import { TouchableOpacity, Text, View } from "react-native";

import { useItemsContext } from "../store/context";

const ListItem = ({ item, goToDetailsCallback }) => {
  const { dispatch } = useItemsContext();

  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', justifyContent: 'space-between' }}
      onPress={() => goToDetailsCallback(item.id)}>
      <View>
        <Text style={{ fontSize: 18 }}>{item.title}</Text>
        <Text style={{ marginTop: 15, color: '#707070' }}>{item.subTitle}</Text>
      </View>
      <TouchableOpacity style={{ justifyContent: 'center' }}
        onPress={() => dispatch({
          type: 'delete',
          id: item.id,
        })}>
        <Text style={{ color: '#ff4040' }}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ListItem;
