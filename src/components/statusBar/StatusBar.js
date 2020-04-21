import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#5bd698',
    height: Constants.statusBarHeight
  },
});

function StatusBar() {
  return (
    <View style={styles.statusBar} />
  );
}

export default StatusBar;
