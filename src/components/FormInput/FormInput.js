import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native'

const formInput = (props) => (
    <View style={styles.inputContainer} >
        <TextInput 
            style={styles.placeInput}
            placeholder="An awesome place"
            value={props.value}
            onChangeText={props.nameChangedHandler}
        />
        <Button
            style={styles.placeButton} 
            title={props.title} 
            onPress={props.submitHandler}
        />
    </View>
);

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
        color: '#fff'
    },
    placeButton: {
        width: "30%"
    },
})

export default formInput;