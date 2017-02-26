import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (

    <View style={styles.containerStyle}>
      {props.children}
    </View>

  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row', // horizontal flex directions ,
                          //column will make it vertical which is default on justify content
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
