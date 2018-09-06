import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './src/components/ListItem/ListItem'
import FormInput from './src/components/FormInput/FormInput'
import List from './src/components/List/List'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
import { addPlace, deletePlace, selectPlace, deselectPlace, changePlace } from './src/store/actions/index'

import placeImage from './src/assets/Mont-Saint-Michel-FRA.jpg'

class App extends React.Component {
 
  placeNameChangedHandler = (text) => {
    this.props.onNameChangedPlace(text)
  }

  placeSubmitHandler = () => {
    this.props.onAddPlace();
  }

  placeSelectedHandler = (key) => {
    this.props.onSelectedPlace(key)
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }

  modalClosedHadler = () => {
    this.props.onDeselectedPlace();
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHadler}
        />
        <FormInput
          value={this.props.placeName}
          nameChangedHandler={this.placeNameChangedHandler}
          title="  +  "
          submitHandler={this.placeSubmitHandler}
        />
        <List
          places={this.props.places}
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

const mapsStateToPorps = state => {
  return {
    placeName: state.places.placeName,
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return{
    onAddPlace: () => dispatch(addPlace()),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectedPlace: (key) => dispatch(selectPlace(key)),
    onDeselectedPlace: () => dispatch(deselectPlace()),
    onNameChangedPlace: (text) => dispatch(changePlace(text))
  };
};

export default connect(mapsStateToPorps, mapDispatchToProps)(App);



