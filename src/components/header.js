//import libraries
import React from 'react';
import ReactNative from 'react-native';
import { View, Text, AppRegistry } from 'react-native';

//make a Component
const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};

//styling is done in the component
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//make available to other parts of the app
export default Header;
