import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
//user-define Import files

const LoaderScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000000" />
    </View>
  );
};

export const Loader = ({visible}: {visible: boolean}) => {
  return visible ? (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        zIndex: 1,
      }}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  ) : (
    <View></View>
  );
};

export default LoaderScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBCF9B',
  },
  spinnerTxt: {
    color: '#ffff',
  },
});
