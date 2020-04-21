import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Portfolio() {
  return (
    <View style={styles.container}>
      <Text>Portfolio</Text>
    </View>
  );
}

export default Portfolio;
