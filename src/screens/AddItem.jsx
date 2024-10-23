import FormView from '../components/FormView';
import {useItemsContext} from '../store/contextAPI/context';

const AddItemScreen = ({navigation}) => {
  const {dispatch} = useItemsContext();
  const submitCallback = item => {
    dispatch({
      type: 'add',
      item: item,
    });
    navigation.goBack();
  };
  return <FormView submitTitle="Add" submitCallback={submitCallback} />;
};

export default AddItemScreen;
