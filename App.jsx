import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/routes/MainStack';

function App() {

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;
