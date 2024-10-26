import FormView from '../components/FormView';

import {observer} from 'mobx-react-lite';
import {useItemsMobXContext} from '../store/mobX/context';

const EditItemScreen = observer(({navigation, route}) => {
  const itemId = route?.params?.itemId;
  const store = useItemsMobXContext();
  const item = store.selectItemById(itemId);

  const submitCallback = item => {
    store.editItem(item);
    navigation.goBack();
  };

  return (
    <FormView item={item} submitTitle="Save" submitCallback={submitCallback} />
  );
});

export default EditItemScreen;
