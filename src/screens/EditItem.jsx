import FormView from '../components/FormView';
import {useItemsContext} from '../store/context';

const EditItemScreen = ({navigation, route}) => {
  const {getItemById, dispatch} = useItemsContext();
  const itemId = route?.params?.itemId;
  const item = getItemById(itemId);

  const submitCallback = item => {
    dispatch({
      type: 'edit',
      item: item,
    });
    navigation.goBack();
  };
  return (
    <FormView item={item} submitTitle="Save" submitCallback={submitCallback} />
  );
};

export default EditItemScreen;
