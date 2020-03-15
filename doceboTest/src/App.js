// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from 'store/store';
import SearchUserContainer from 'component/searchUser/searchUser.container';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={SearchUserContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
