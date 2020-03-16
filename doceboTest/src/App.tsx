import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from 'store/store';
import SearchUserContainer from 'component/searchUser/searchUser.container';
import UserContainer from "./component/userProfile/userProfile.container";

export const Route = {
    HOME:{
        name: 'SearchUsers',
        title: 'Search Git Users'
    },
    PROFILE:{
        name: 'UserProfile'
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
                    <Stack.Screen name={Route.PROFILE.name}
                                  options={({ navigation, route }) =>
                                      ({
                                          // @ts-ignore
                                          title: route && route.params && route.params.username,
                                          headerBackTitleVisible: false
                                      })
                                  }
                                  component={UserContainer} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
