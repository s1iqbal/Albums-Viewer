import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//used to make http request
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


//Class Based component, has a render function.
//Class Based component know when they are going to be rendered
//Life cycle methods will envoke a event that will let react know when it changes

class AlbumList extends Component {

  //this is a class level property. It has an empty state at the moment.
  //This means if this state were to change, it would recall the render function.
  //Right now we have an empty list called albums. It is an array
  //DEFINITION OF STATE:
  /*
    A plain javascript object used to record and
    respond to user-triggered events.
    When we need to update what a component shows,
    call 'this.setState'
    Only change state with 'setState', not do 'this.state = watever. NEVER DO IT DIRECTLY'
  */
  state = { albums: [] };
  //DIFFERENCE BETWEEN STATE VS PROP (property)
  /*
    Prop is used when ever we want to communicate the parent component to the child component

    State is for components internal record keeping. Update some amount of data overtime
  */

  /*
    This Life cycle method will automatically execute these statements when
    the screen needs to render something within the render function
  */
  componentWillMount() {
    // Makes an http request
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
      //this is a promise and setState is a function that updates the component
      //state
  }
      //A HTTP request is asynchronous means we do not know how long it will
      //take for the request for it to be complete. This is why we need states

    /*
    an alternate way NATIVELY WITHOUT THE AXIOS LIBRARY to do a https request is
    as follows: It uses the fetch statement

    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(data => this.setState({ albums: data }));

    */

  renderAlbums() {
    //a key has to be unique that will be rerendered, normally associated with an id
    return this.state.albums.map(album =>
      //we are just associatign a variable with the {album} that is a prop
      // being passed down. The variable name does not have to be album,
      //it can be anything
      <AlbumDetail key={album.title} album={album} />
    );
    //map is a array helper. Map you pass in a fat arrow function.
    //if you wanna reference a javascript variable, it needs to be wrapped with
    // {} braces.
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

export default AlbumList;
