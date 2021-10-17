import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetRequest from './src/screens/GetRequest';
import PostRequest from './src/screens/PostRequest';
import Home from './src/screens/Home';

const RootStack = createStackNavigator();
const App = () => {
  
  return (
      <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="GetRequest" component={GetRequest} />
            <RootStack.Screen name="PostRequest" component={PostRequest} />
          </RootStack.Navigator>
      </NavigationContainer>
  );
}

export default App;