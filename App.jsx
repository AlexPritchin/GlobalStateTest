import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/routes/MainStack';

import {ItemsMobXContext} from './src/store/mobX/context';
import {Store} from './src/store/mobX/store';

function App() {
  return (
    <ItemsMobXContext.Provider value={new Store()}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </ItemsMobXContext.Provider>
  );
}

export default App;
