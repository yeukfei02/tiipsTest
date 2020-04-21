import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#33cc7f',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10
  },
  textStyle: {
    fontSize: 35,
    color: 'white'
  }
});

function TopBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>tiips</Text>
    </View>
  );
}

export default TopBar;
