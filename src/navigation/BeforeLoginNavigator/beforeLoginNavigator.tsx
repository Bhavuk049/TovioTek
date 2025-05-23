import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '../Routs';
import Login from '../../screens/beforeLogin/login';

//user-defined Import files

const BeforeLoginStack = createNativeStackNavigator();

const BeforeLoginNavigator = () => {
  return (
    <BeforeLoginStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Route.Login}>
      <BeforeLoginStack.Screen name={Route.Login} component={Login} />
    </BeforeLoginStack.Navigator>
  );
};

export default BeforeLoginNavigator;
