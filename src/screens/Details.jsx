import {StyleSheet, Text, View} from 'react-native';
import {useItemsContext} from '../store/context';

const DetailsScreen = ({route}) => {
  const {getItemById} = useItemsContext();
  const itemId = route?.params?.itemId;
  const item = getItemById(itemId);
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
