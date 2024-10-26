import {StyleSheet, Text, View} from 'react-native';

import {observer} from 'mobx-react-lite';
import {useItemsMobXContext} from '../store/mobX/context';

const DetailsScreen = observer(({route}) => {
  const itemId = route?.params?.itemId;
  const store = useItemsMobXContext();
  const item = store.selectItemById(itemId);

  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Text style={{marginTop: 20}}>{item.subTitle}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
  },
});

export default DetailsScreen;
