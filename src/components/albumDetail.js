import React from 'react';
import { View, Text, Image, Linking } from 'react-native'; //Linking is for url links
import Card from './card';
import CardSection from './cardSection';
import Button from './button';

//this is a functional component because we are just displaying data
//here {album} is props.album and is a destructured object
const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url} = album;
  return (
    <Card>

      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View stytle={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>Title: {title} </Text>
          <Text>Artist: {artist} </Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.imageStyle} source={ {uri: image} } />
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
    justifyContent: 'space-around',
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
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1, //Here flex: 1 means please expand to the entire area of parent
    width: null //where width null makes it end to end of the parent view
  }
}

export default AlbumDetail;
