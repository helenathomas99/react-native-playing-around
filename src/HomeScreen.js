import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header';

function HomeScreen () {
    return (
    <SafeAreaView style = {styles.container}>
        <Header />
    </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
    },
  });

  export default HomeScreen;