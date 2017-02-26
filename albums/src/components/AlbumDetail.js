import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
//Since album detail only has to show something that will not change, err it is
//static therefore we do not need states or lifecycle methods
//This means we do not need class based components, therefore we can use
//functional components.

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  const { thumbnailStyle,
          thumbnailContainerStyle,
          headerContentStyle,
          headerTextStyle,
          imageStyle,
          imageContainerStyle
        } = styles;

  return (
    <Card>

      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>

        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <View style={imageContainerStyle}>
          <Image
            style={imageStyle}
            source={{ uri: image }}
          />
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
        Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50

  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 350,
    width: 353,
    position: 'relative'
  },
  imageContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  }


};
export default AlbumDetail;
