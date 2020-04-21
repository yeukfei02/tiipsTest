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

function Bookmark() {
  return (
    <View style={styles.container}>
      <Text>Bookmark</Text>
    </View>
  );
}

export default Bookmark;
