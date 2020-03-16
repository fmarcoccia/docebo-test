import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from 'store/store';
import SearchUserContainer from 'component/searchUser/searchUser.container';

const Route = {
    HOME:{
        name: 'SearchUsers',
        title: 'Search Git Users'
    }
};

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={Route.HOME.name}>
                    <Stack.Screen name={Route.HOME.name}
                                  options={{title: Route.HOME.title}}
                                  component={SearchUserContainer} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;