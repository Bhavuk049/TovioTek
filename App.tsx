import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor={'#FBCF9B'} />
        <SafeAreaView
          edges={['top', 'left', 'right']}
          style={{flex: 1, backgroundColor: '#FBCF9B'}}>
          <RootNavigation />
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
