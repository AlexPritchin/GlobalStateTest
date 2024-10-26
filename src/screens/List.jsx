import {FlatList, StyleSheet, View} from 'react-native';
import ListItem from '../components/ListItem';

import {observer} from 'mobx-react-lite';
import {useItemsMobXContext} from '../store/mobX/context';

const ListScreen = observer(({navigation}) => {
  const store = useItemsMobXContext();

  const goToDetails = itemId =>
    navigation.navigate('Details', {itemId: itemId});

  return (
    <View style={styles.container}>
      <FlatList
        data={store.items.slice()}
        renderItem={({item}) => (
          <ListItem item={item} goToDetailsCallback={goToDetails} />
        )}
        ItemSeparatorComponent={() => <View style={styles.listItemSeparator} />}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
  listItemSeparator: {
    height: 1,
    marginLeft: 10,
    marginVertical: 10,
    backgroundColor: 'black',
  },
});

export default ListScreen;
