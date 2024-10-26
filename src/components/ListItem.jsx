import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

import {observer} from 'mobx-react-lite';
import {useItemsMobXContext} from '../store/mobX/context';

const ListItem = observer(({item, goToDetailsCallback}) => {
  const store = useItemsMobXContext();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => goToDetailsCallback(item.id)}>
      <View>
        <Text style={{fontSize: 18}}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
      </View>
      <TouchableOpacity
        style={{justifyContent: 'center'}}
        onPress={() => store.removeItem(item.id)}>
        <Text style={{color: '#ff4040'}}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTitle: {
    marginTop: 15,
    color: '#707070',
  },
});

export default ListItem;
