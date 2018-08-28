import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem'
import FormInput from './src/components/FormInput/FormInput'
import List from './src/components/List/List'

import placeImage from './src/assets/Mont-Saint-Michel-FRA.jpg'

export default class App extends React.Component {
  state = {
    placeName: "",
    places: []
  }

  placeNameChangedHandler = (text) => {
    this.setState({
      placeName: text
    })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: this.state.placeName,
          image: placeImage
        })
      };
    });
  }

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key
        })
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FormInput
          value={this.state.placeName}
          nameChangedHandler={this.placeNameChangedHandler}
          title="add"
          submitHandler={this.placeSubmitHandler}
        />
        <List
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#4D004D',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
