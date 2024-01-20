import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ListItem from '../components/ListItem';

const itemsArr = [
  {
    id: 1,
    title: 'Item One',
    subTitle: 'Item one description',
  },
  {
    id: 2,
    title: 'Item Two',
    subTitle: 'Item two description',
  },
  {
    id: 3,
    title: 'Item Three',
    subTitle: 'Item three description',
  },
];

const ListScreen = ({ navigation }) => {
  const goToDetails = (itemId) => navigation.navigate('Details', {params: { itemId: itemId }});

  return (
    <View style={styles.container}>
      <FlatList
        data={itemsArr}
        renderItem={({ item }) => (<ListItem item={item} goToDetailsCallback={goToDetails} />)}
        ItemSeparatorComponent={() => (<View style={{ height: 1, marginLeft: 10, marginVertical: 10, backgroundColor: 'black' }} />)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 25,
    backgroundColor: 'white'
  },
});

export default ListScreen;
