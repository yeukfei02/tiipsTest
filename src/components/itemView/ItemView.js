import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import HorizontalItemView from '../horizontalItemView/HorizontalItemView';
import Divider from '../divider/Divider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray'
  }
});

function ItemView({ item }) {
  const [detailsList, setDetailsList] = useState([]);

  useEffect(() => {
    if (item) {
      setDetailsList(item.Details);
    }
  }, [item]);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{item.description.toUpperCase()}</Text>
      <FlatList
        data={detailsList}
        renderItem={({ item }) => {
          return (
            <HorizontalItemView
              item={item}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
      <Divider margin={15} />
    </View>
  );
}

export default ItemView;
