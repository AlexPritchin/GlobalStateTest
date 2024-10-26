import FormView from '../components/FormView';

import {observer} from 'mobx-react-lite';
import {useItemsMobXContext} from '../store/mobX/context';

const AddItemScreen = observer(({navigation}) => {
  const store = useItemsMobXContext();

  const submitCallback = item => {
    store.addItem(item);
    navigation.goBack();
  };

  return <FormView submitTitle="Add" submitCallback={submitCallback} />;
});

export default AddItemScreen;
