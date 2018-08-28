import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native'

import ListItem from '../ListItem/ListItem'

const list = (props) => {

    return <FlatList
        style={styles.listContainer}
        data={props.places}
        renderItem={(info) => (
            <ListItem
                placeName={info.item.name}
                placeImage={info.item.image}
                onItemPressed={() => props.onItemDeleted(info.item.key)}
            />
        )}
    />
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
})

export default list;