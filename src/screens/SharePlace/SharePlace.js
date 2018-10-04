import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';

import FormInput from '../../components/FormInput/FormInput';
import { addPlace } from '../../store/actions/index';

class SharePlaceScreen extends Component{
    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    }

    render(){
        return(
            <View style={{backgroundColor: '#4D004D'}}>
                {/* <Text>On SharePlaceScreen</Text> */}
                <FormInput onPlaceAdded={this.placeAddedHandler}/>
            </View>
        )
    }
}

// export default SharePlaceScreen;

const mapDispatchToProps = dispatch => {
    return{
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);