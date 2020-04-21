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

function Account() {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
    </View>
  );
}

export default Account;
