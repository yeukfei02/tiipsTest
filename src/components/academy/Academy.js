import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  statusBar: {
    backgroundColor: '#33cc7f',
    height: Constants.statusBarHeight
  },
  container: {
    flex: 1,
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

function Academy() {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.statusBar} />
      <View style={styles.container}>
        <Text>Academy</Text>
      </View>
    </ScrollView>
  );
}

export default Academy;
