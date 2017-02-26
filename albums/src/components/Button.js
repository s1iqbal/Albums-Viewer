import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//Handles User feedback
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity

      onPress={onPress}
      style={buttonStyle}
    >
        <Text style={textStyle}>
          {children}
        </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1, //flex 1 means expand to fill all content as much as it can
    alignSelf: 'stretch', //positions it self using flex bot rules
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },

  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600', //how bold the text will be
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Button;
