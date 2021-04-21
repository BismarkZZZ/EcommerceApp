import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Details from './component/Detailed/Details';
import DetailedItem from './component/DetailedItem';
import MarketList from './component/MarketList';



class App extends Component {
  render() {
    return (



      <ScrollView style={styles.container}>

        < Details style={styles.details} />
        < MarketList style={styles.marketlist} />

        {/* <DetailedItem /> */}
        <StatusBar style="transparent" />

      </ScrollView>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#f8f4ff',
    flexDirection: 'column',
    flexBasis: '100%',
    marginTop: 10
  },
  details: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start'
  },
  marketlist: {
    flex: 2
  }
});


export default App;