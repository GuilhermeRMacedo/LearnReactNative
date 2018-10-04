import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import List from '../../components/List/List';

class FindPlaceScreen extends Component{
    render(){
        return(
            <View style={{backgroundColor: '#4D004D'}}>
                {/* <Text>On FindPlaceScreen</Text> */}
                <List places={this.props.places}/>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return{
        places: state.places.places
    }
}

// export default FindPlaceScreen;

export default connect(mapStateToProps)(FindPlaceScreen);