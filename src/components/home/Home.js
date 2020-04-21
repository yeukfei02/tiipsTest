import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import StatusBar from '../statusBar/StatusBar';
import TopBar from '../topBar/TopBar';

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

function Home() {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <StatusBar />
      <TopBar />
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </ScrollView>
  );
}

export default Home;
