import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from 'store/store';
import SearchUserContainer from 'component/searchUser/searchUser.container';
import TabManagerComponent from './component/tabManager/tabManager.component';
import {Route} from './navigation/route';

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={Route.HOME.name}>
                    <Stack.Screen name={Route.HOME.name}
                                  options={{title: Route.HOME.title}}
                                  component={SearchUserContainer} />
                    <Stack.Screen name={Route.USER_DETAILS.name}
                                  options={({ navigation, route }) =>
                                      ({
                                          // @ts-ignore
                                          title: route && route.params && route.params.username,
                                          headerBackTitleVisible: false
                                      })
                                  }
                                  component={TabManagerComponent} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
