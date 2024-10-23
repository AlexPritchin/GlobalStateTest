import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/routes/MainStack';

import {Provider} from 'react-redux';
import {store} from './src/store/redux/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
