import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//user-define Import files
import NavigationService from './NavigationService';
import {Route} from './Routs';
import BeforeLoginNavigator from './BeforeLoginNavigator/beforeLoginNavigator';
import LoaderScreen from '../components/Loader/Loader';
import BottomTabNavigator from './AfterLoginNavigator/bottomTabNavigator';

const RootStack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {false && (
          <RootStack.Screen name={Route.Loader} component={LoaderScreen} />
        )}
        {true ? (
          <RootStack.Screen
            name={Route.AfterLogin}
            component={BottomTabNavigator}
          />
        ) : (
          <RootStack.Screen
            name={Route.BeforeLogin}
            component={BeforeLoginNavigator}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
