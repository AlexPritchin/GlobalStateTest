import {StyleSheet, Text, View} from 'react-native';

import {useSelector} from 'react-redux';
import {selectItemById} from '../store/redux/itemsSlice';

const DetailsScreen = ({route}) => {
  const itemId = route?.params?.itemId;
  const item = useSelector(state => selectItemById(state, itemId));

  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Text style={{marginTop: 20}}>{item.subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
  },
});

export default DetailsScreen;
