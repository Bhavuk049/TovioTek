import React from 'react';
import {GestureResponderEvent, Image, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Route} from '../Routs';
import Setting from '../../screens/afterLogin/setting';
import {home, setting} from '../../utils/image';
import {hp, wp} from '../../utils/responsive';
import {shadow} from '../../utils/shadow';
import AfterLoginNavigator from './afterLoginNavigator';

const BottomStack = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomStack.Navigator
      initialRouteName={Route.AfterLoginDashboard}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopLeftRadius: wp(5),
          borderTopRightRadius: wp(5),
          borderWidth: wp(0.1),
          height: hp(9),
          overflow: 'hidden',
          paddingHorizontal: wp(10),
          ...styles.shadow,
        },
      }}>
      <BottomStack.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused ? styles.bottomBtnView : styles.bottomBtnVie2}>
              <Image
                source={home}
                style={[
                  styles.bottomImg,
                  {tintColor: focused ? '#F3763B' : '#353535'},
                ]}
              />
            </View>
          ),
        }}
        name={Route.AfterLoginDashboard}
        component={AfterLoginNavigator}
      />
      <BottomStack.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused ? styles.bottomBtnView : styles.bottomBtnVie2}>
              <Image
                source={setting}
                style={[
                  styles.bottomImg,
                  {tintColor: focused ? '#F3763B' : '#353535'},
                ]}
              />
            </View>
          ),
        }}
        name={Route.Setting}
        component={Setting}
      />
    </BottomStack.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabWrapper: {
    overflow: 'hidden',
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: wp(0),
      height: hp(1),
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  bottomBtnView: {
    height: hp(5.5),
    width: hp(5.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6DDD1',
    borderRadius: hp(4),
    marginTop: hp(3),
    ...shadow,
  },
  bottomBtnVie2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(3),
    height: hp(6),
    width: wp(15),
  },
  bottomImg: {
    height: hp(3),
    width: wp(6),
    resizeMode: 'contain',
  },
  bottomTxt: {
    fontSize: hp(1.4),
  },
});
