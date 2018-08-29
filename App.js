import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem'
import FormInput from './src/components/FormInput/FormInput'
import List from './src/components/List/List'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'

import placeImage from './src/assets/Mont-Saint-Michel-FRA.jpg'

export default class App extends React.Component {
  state = {
    placeName: "",
    places: [],
    selectedPlace: null
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

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      }
    })
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key
        }),
        selectedPlace: null
      }
    });
  }

  modalClosedHadler = () => {
    this.setState({
      selectedPlace: null
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHadler}
        />
        <FormInput
          value={this.state.placeName}
          nameChangedHandler={this.placeNameChangedHandler}
          title="add"
          submitHandler={this.placeSubmitHandler}
        />
        <List
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
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
