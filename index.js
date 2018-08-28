//import a library to help create a Component
import React from 'react';
import ReactNative from 'react-native';
//import restructuring
import { Text, AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/albumList';

// create Component
const App = () => {
  return (
    //Here flex: 1 means please expand to the entire area of app
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums!'} />
      <AlbumList />
    </View>
  );
};
//render to device
AppRegistry.registerComponent('albums', ()=> App);

/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);
