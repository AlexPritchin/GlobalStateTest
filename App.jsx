import {NavigationContainer} from '@react-navigation/native';

import {ItemsContextProvider} from './src/store/context';
import MainStack from './src/routes/MainStack';

function App() {
  return (
    <NavigationContainer>
      <ItemsContextProvider>
        <MainStack />
      </ItemsContextProvider>
    </NavigationContainer>
  );
}

export default App;
