import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import ListItem from './src/components/ListItem/ListItem'
import FormInput from './src/components/FormInput/FormInput'
import List from './src/components/List/List'

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

  placeSubmitHandler = () =>{
    if(this.state.placeName.trim()===""){
      return;
    }
    this.setState(prevState => {
      return{
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  render() {
    const placesOutput = this.state.places.map((place,i) => (
      <ListItem key={i} placeName={place} />
    ))
    return (
      <View style={styles.container}>
        <FormInput 
          value={this.state.placeName}
          nameChangedHandler={this.placeNameChangedHandler}
          title="add"
          submitHandler={this.placeSubmitHandler}
        />
        <List 
          placesOutput={placesOutput}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
