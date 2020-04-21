import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

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
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </ScrollView>
  );
}

export default Home;
