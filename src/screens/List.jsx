import {FlatList, StyleSheet, Text, View} from 'react-native';

import ListItem from '../components/ListItem';
import {useItemsContext} from '../store/context';

const ListScreen = ({navigation}) => {
  const {items} = useItemsContext();

  const goToDetails = itemId =>
    navigation.navigate('Details', {params: {itemId: itemId}});

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} goToDetailsCallback={goToDetails} />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              marginLeft: 10,
              marginVertical: 10,
              backgroundColor: 'black',
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
});

export default ListScreen;
