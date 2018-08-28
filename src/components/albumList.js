//import libraries
import React, { Component } from 'react';
import {ScrollView} from 'react-native'; //To make the list scrollable
import { View, Text, AppRegistry } from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail'

//make a Component
class AlbumList extends Component {
  //passing initial base state
  //construtor is the same thing
  state = {
    albums: []
  };

  //knows when its about to be  rendered to the screen
  //viewWillAppear?
  componentWillMount() {
    //returns a promise to make this asynchronous
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  //Keys are important in lists
  renderAlbums() {
    return this.state.albums.map(
      album => <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>

    );
  }
}

//make available to other parts of the app
export default AlbumList;
