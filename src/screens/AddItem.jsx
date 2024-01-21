import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import FormView from '../components/FormView';

const AddItemScreen = () => {
  const submitCallback = (item) => {
    console.log(item);
  }
  return (
    <FormView submitTitle='Add' submitCallback={submitCallback}/>
  );
};

export default AddItemScreen;
