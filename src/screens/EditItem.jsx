import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import FormView from '../components/FormView';
import { useItemsContext } from '../store/context';

const EditItemScreen = ({ navigation, route }) => {
  const { getItemById, dispatch } = useItemsContext();
  const itemId = route?.params?.params?.itemId;
  const item = getItemById(itemId);

  const submitCallback = (item) => {
    console.log(item);
    dispatch({
      type: 'edit',
      item: item,
    });
    navigation.goBack();
  }
  return (
    <FormView item={item} submitTitle='Save' submitCallback={submitCallback}/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
  },
});

export default EditItemScreen;
