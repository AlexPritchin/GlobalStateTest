import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/routes/MainStack';

import {Provider} from 'react-redux';
import {store, persistor} from './src/store/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
