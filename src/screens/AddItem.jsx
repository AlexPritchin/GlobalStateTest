import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import FormView from '../components/FormView';
import { useItemsContext } from '../store/context';

const AddItemScreen = ({ navigation }) => {
  const { dispatch } = useItemsContext();
  const submitCallback = (item) => {
    console.log(item);
    dispatch({
      type: 'add',
      item: item,
    });
    navigation.goBack();
  }
  return (
    <FormView submitTitle='Add' submitCallback={submitCallback}/>
  );
};

export default AddItemScreen;
