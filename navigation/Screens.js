import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import SearchScreen from '../components/SearchScreen';
import { Text } from 'react-native';
import SearchList from '../components/SearchList';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerTitle:'',headerTransparent:true}}>
      
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='SearchScreen' component={SearchScreen}/>
    </Stack.Navigator>
  );
}

const MainNavigator = ()=>{
    return(
        <NavigationContainer>
            <StackNavigator>
            </StackNavigator>
        </NavigationContainer>
    )
}

export default MainNavigator
