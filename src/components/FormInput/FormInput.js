import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

// const formInput = (props) => (
//     <View style={styles.inputContainer} >
//         <TextInput 
//             style={styles.placeInput}
//             placeholder="An awesome place"
//             value={props.value}
//             onChangeText={props.nameChangedHandler}
//             underlineColorAndroid="#990099"
//         />
//         <Button
//             style={styles.placeButton} 
//             title={props.title} 
//             onPress={props.submitHandler}
//             color= "#990099"
//         />
//     </View>
// );

class FormInput extends Component {
    state = {
        placeName: ""
    };

    componentDidMount() {

    }

    placeNameChangedHandler = (text) => {
        this.setState({
            placeName: text
        })
    }

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return
        }

        this.props.onPlaceAdded(this.state.placeName);
    }

    render() {
        return (
            <View style={styles.inputContainer} >
                <TextInput
                    style={styles.placeInput}
                    placeholder="An awesome place"
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler}
                    underlineColorAndroid="#990099"
                />
                <Button
                    style={styles.placeButton}
                    title="Add"
                    onPress={this.placeSubmitHandler}
                    color="#990099"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginTop: 10
    },
    placeInput: {
        width: "70%",
        color: '#fff',
        padding: 5
    },
    placeButton: {
        width: "30%"
    },
})

export default FormInput;