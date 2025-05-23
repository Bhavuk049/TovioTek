import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '../Routs';
import Dashboard from '../../screens/afterLogin/dashboard';
import AddNewClient from '../../screens/afterLogin/AddNewClient';
import Collection from '../../screens/afterLogin/collection screen';

//user-define Import files

const AfterLoginStack = createNativeStackNavigator();

const AfterLoginNavigator = () => {
  return (
    <AfterLoginStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'default',
      }}
      initialRouteName={Route.Dashboard}>
      <AfterLoginStack.Screen name={Route.Dashboard} component={Dashboard} />
      <AfterLoginStack.Screen
        name={Route.AddNewClient}
        component={AddNewClient}
      />
      <AfterLoginStack.Screen name={Route.Collection} component={Collection} />
    </AfterLoginStack.Navigator>
  );
};

export default AfterLoginNavigator;
