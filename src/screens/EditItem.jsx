import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import FormView from '../components/FormView';

const EditItemScreen = ({ route }) => {
  const itemId = route?.params?.params?.itemId;
  const submitCallback = (item) => {
    console.log(item);
  }
  return (
    <FormView item={{ title: 'Item One', subTitle: 'Item one description' }} submitCallback={submitCallback}/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white'
  },
});

export default EditItemScreen;
