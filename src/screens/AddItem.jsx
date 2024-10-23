import FormView from '../components/FormView';

import {useDispatch} from 'react-redux';
import {add} from '../store/redux/itemsSlice';

const AddItemScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const submitCallback = item => {
    dispatch(
      add({
        item,
      }),
    );
    navigation.goBack();
  };

  return <FormView submitTitle="Add" submitCallback={submitCallback} />;
};

export default AddItemScreen;
