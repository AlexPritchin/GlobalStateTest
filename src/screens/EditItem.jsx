import FormView from '../components/FormView';

import {useSelector, useDispatch} from 'react-redux';
import {edit, selectItemById} from '../store/redux/itemsSlice';

const EditItemScreen = ({navigation, route}) => {
  const itemId = route?.params?.itemId;
  const item = useSelector(state => selectItemById(state, itemId));
  const dispatch = useDispatch();

  const submitCallback = item => {
    dispatch(
      edit({
        item,
      }),
    );
    navigation.goBack();
  };

  return (
    <FormView item={item} submitTitle="Save" submitCallback={submitCallback} />
  );
};

export default EditItemScreen;
