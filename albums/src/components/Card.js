import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
    {props.children}
    </View>
  );
};


const styles = {
  containerStyle: {
    borderWidth: 1, //makes a border around the container with pixel 1
    borderRadius: 2, //makes the edges rounded
    borderColor: '#ddd',
    borderBottomWidth: 0, //the other components will be below iut thus we dont need one

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2, //corner of shadow will be rounded
    elevation: 1,

    marginLeft: 5, //Used to have spacing between components
    marginRight: 5, //Used to have spacing between components
    marginTop: 10, //Used to have spacing between components


  }
};

export default Card;
