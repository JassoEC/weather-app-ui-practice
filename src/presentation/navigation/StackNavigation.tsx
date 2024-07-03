import {HomeScreen, ListScreen} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';

export type StackParamList = {
  Home: undefined;
  List: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="List" component={ListScreen} />
    </Stack.Navigator>
  );
};
