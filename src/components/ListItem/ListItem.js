import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem} >
            <Image resizeMode="contain" source={props.placeImage} style={styles.placeImage} />
            <Text style={styles.text}>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        //marginBottom: 5,
        marginTop: 5,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    },
    text: {
        color: "#800080"
    }
});

export default listItem;

