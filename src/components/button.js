import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//onPress prop method call gets pass from the parent
//and children is props.children
//alows you to reuse it anywhere
const Button = ({onPress, children}) => {
  const { buttonStyle, textStyle } = styles

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {

  buttonStyle: {
    flex: 1, //Here flex: 1 means please expand to the entire area of parent
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 2,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export default Button;
