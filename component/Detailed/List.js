import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'
import { Rating } from "react-native-rating-element";





export default function List({ photo, name, price }) {
    return (

        <View style={styles.container} >
            <ScrollView>
                <View style={styles.item} >
                    <Image source={photo} style={styles.itemFoto} />
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{name}</Text>
                        <Rating
                            rated={3.5}
                            totalCount={5}
                            ratingColor="#f1c644"
                            ratingBackgroundColor="#d4d4d4"
                            size={14}
                            readonly // by default is false
                            icon="ios-star"
                            direction="row"
                        />
                        <Text style={styles.itemPrice}>${price}</Text>
                    </View>
                </View>
                <StatusBar style="auto" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'column',
        margin: 20
    },
    item: {
        flexDirection: 'row'
    },
    itemContainer: {
        flexDirection: 'column',
        marginVertical: 30
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10
    },
    itemPrice: {
        marginTop: 10,
        color: '#876bf6',
        fontWeight: 'bold',
        fontSize: 18
    },
    itemFoto: {
        height: 115,
        width: 115,
        borderRadius: 14,
        marginRight: 20
    }
})