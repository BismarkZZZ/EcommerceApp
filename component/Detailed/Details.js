import React from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export default function Details() {
    return (

        <View style={styles.container} >

            <View>
                <View style={styles.upperIcons} >
                    <View style={styles.prevIcon} >
                        <TouchableOpacity>
                            <Ionicons name="arrow-back" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cart} >
                        <TouchableOpacity>
                            <AntDesign name="shoppingcart" size={30} color="#7b68ee" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.textSearch} >
                <Text style={styles.textText} >Woman Bucket Hat</Text>
                <View style={styles.inputConatiner} >
                    <TextInput style={styles.input} placeholder='Search Bucket Hat' />
                    <TouchableOpacity>
                        <Text style={styles.inputText}>Filter</Text>
                    </TouchableOpacity>
                </View>
            </View>



        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'column',
        flexBasis: '20%',
        margin: 20
    },
    upperIcons: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginBottom: 45
    },
    prevIcon: {
        borderRadius: 100 / 2,
        backgroundColor: '#ffffff',
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cart: {
        borderRadius: 100 / 2,
        backgroundColor: '#ffffff',
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSearch: {
        flex: 1
    },
    inputConatiner: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderRadius: 15,
        height: 50,
        paddingHorizontal: 20
    },
    inputText: {
      display: 'flex',
      color: '#7b68ee',
      fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        height: 50,
        flexBasis: '90%'
    },
    textText : {
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 20
    }
})