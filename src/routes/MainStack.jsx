import { createStackNavigator } from '@react-navigation/stack';

import HeaderButton from '../components/HeaderButton';
import ListScreen from '../screens/List';
import DetailsScreen from '../screens/Details';
import AddItemScreen from '../screens/AddItem';
import EditItemScreen from '../screens/EditItem';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#fafafa',
        }
      }}>
      <Stack.Screen name="List" component={ListScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <HeaderButton onPressCallback={() => navigation.navigate('AddItem')} title='Add' />
          ),
        })}
      />
      <Stack.Screen name="Details" component={DetailsScreen}
        options={({ navigation, route }) => ({
          headerRight: () => (
            <HeaderButton
              onPressCallback={() => navigation.navigate('EditItem', { params: { itemId: route?.params?.params?.itemId } })}
              title='Edit'
            />
          ),
        })}/>
      <Stack.Screen name="AddItem" component={AddItemScreen} />
      <Stack.Screen name="EditItem" component={EditItemScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
