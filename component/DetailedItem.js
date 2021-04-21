import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Rating } from "react-native-rating-element";
import { LinearGradient } from 'expo-linear-gradient';

export default function DetailedItem() {
    return (
        <SafeAreaView >
            <View style={styles.container}>
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
                <View>
                    <ImageBackground source={require('../assets/buckethat.jpeg')} style={styles.image} />
                    <View style={styles.heart}>
                        <TouchableOpacity>
                            <FontAwesome5 name="heart" size={30} color="#7b68ee" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.ItemDetails}>
                    <Text style={styles.ItemName}>Item Name</Text>
                    <View style={styles.ItemRate}>
                        <Text style={styles.RateText}>Review : <Rating
                            rated={3.3}
                            totalCount={5}
                            ratingColor="#f1c644"
                            ratingBackgroundColor="#d4d4d4"
                            size={15}
                            readonly // by default is false
                            icon="ios-star"
                            direction="row"
                        />
                        </Text>
                    </View>
                    <View style={styles.Gradientbox}>
                        <LinearGradient
                            colors={['#7b68ee', '#7b68ee']}
                            start={{
                                x: 0,
                                y: 0
                            }}
                            end={{
                                x: 1,
                                y: 1
                            }}
                            style={styles.box} />
                    </View>
                    <Text style={styles.Description}>Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. </Text>
                    <View>
                        <LinearGradient
                            colors={['#ffffff', '#f8f4ff']}
                            start={{
                                x: 0,
                                y: 0
                            }}
                            end={{
                                x: 1,
                                y: 1
                            }}
                            style={styles.Materialbox} 
                        >
                            <Text style={styles.Material}>Material : 91% polyester, 9% elastane</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.sizes}>
                        <TouchableOpacity style={styles.sizesButton}>
                            <Text style={styles.sizesText}>XS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sizesButton}><Text style={styles.sizesText}>S</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.sizesButton}><Text style={styles.sizesText}>M</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.sizesButton}><Text style={styles.sizesText}>L</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.sizesButton}><Text style={styles.sizesText}>XL</Text></TouchableOpacity>
                    </View>
                    <View style={styles.priceBox}>
                        <View style={styles.price}>
                            <Text style={styles.priceText}>Total Amount</Text>
                            <Text style={styles.priceFigure}>$110</Text>
                        </View>
                        <View style={styles.CartBox}>
                            <Text style={styles.CartText}>Add to Cart</Text>
                        </View>
                    </View>

                </View>
            </View>


            <StatusBar style="auto" />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginBottom: 20
    },
    upperIcons: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    prevIcon: {
        borderRadius: 100 / 2,
        backgroundColor: '#ffffff',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cart: {
        borderRadius: 100 / 2,
        backgroundColor: '#ffffff',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 370,
        width: 375,
        flex: 1,
        resizeMode: "cover"
    },
    heart: {
        borderRadius: 100 / 2,
        backgroundColor: '#ffffff',
        height: 50,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        position: 'absolute',
        top: 30,
        right: 0
    },
    ItemDetails: {
        marginTop: 25,
        padding: 10
    },
    ItemName: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    ItemRate: {
        paddingVertical: 10
    },
    RateText: {
        fontSize: 17,
        fontWeight: '500'
    },
    box: {
        width: '15%',
        height: 5,
        borderRadius: 3
    },
    Gradientbox: {
        marginVertical: 20
    },
    Description: {
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 15
    },
    Material: {
        color: '#7b68ee',
        paddingLeft: 30,
        fontWeight: '600'
    },
    Materialbox: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        marginLeft: -30
    },
    sizes: {
        flexDirection: 'row',
        marginTop: 25
    },
    sizesButton: {
        backgroundColor: '#ffffff',
        height: 40,
        width: 40,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderRadius: 10
    },
    sizesText: {
        fontWeight: 'bold'
    },
    priceBox: {
        flexDirection: 'row',
        backgroundColor: '#7b68ee',
        height: 80,
        borderRadius: 15,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    price: {
        justifyContent: 'center',
        margin: 25
    },
    priceText: {
        fontWeight: '400',
        color: '#fff',
        fontSize: 12
    },
    priceFigure: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    CartBox: {
        justifyContent: 'center',
        margin: 25,
        backgroundColor: '#6050dc',
        height: 35,
        borderRadius: 10,
        width: 100
    },
    CartText: {
        color:  '#fff',
        fontWeight: '600',
        alignSelf: 'center'
    }
})