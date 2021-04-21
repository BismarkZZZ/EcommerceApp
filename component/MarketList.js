import React from 'react'
import {SafeAreaView, FlatList,  } from "react-native"
import List from '../component/Detailed/List'
import Nike from '../assets/buckethat.jpeg'
import Chrome from '../assets/chrome.jpeg'
import OffWhite from '../assets/OffWhite.jpeg'
import Vutton from '../assets/vutton.jpeg'

export default function MarketList () {
    const list = [
        {imgUrl: Nike, name: 'Nike Bucket Hat', cost: '29'},
        {imgUrl: OffWhite, name: 'Off-White Bucket Hat', cost: '190'},
        {imgUrl: Vutton, name: 'Louis Vutton Bucket Hat', cost: '93'},
        {imgUrl: Chrome, name: 'Chrome Hearts Bucket Hat', cost: '140'}
    ]

    return (
        <SafeAreaView>
            
            <FlatList 
                data={list}
                renderItem={({ item }) => {
                    return <List name={item.name}  price={item.cost} photo={item.imgUrl}/>
                }}
                keyExtractor={(item)=>item.cost} 
            />
        </SafeAreaView>
    )
}