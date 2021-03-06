import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, FlatList } from 'react-native';
import axios from 'axios';

import StatusBar from '../statusBar/StatusBar';
import TopBar from '../topBar/TopBar';
import ItemView from '../itemView/ItemView';

const ROOT_URL = `https://demo-api.bigmind.io/v1`;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
});

function Bookmark() {
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    getProductsList();
  }, []);

  const getProductsList = async () => {
    const response = await axios.get(`${ROOT_URL}/products/classes`);
    if (response && response.data.data) {
      setResultList(response.data.data);
    }
  }

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <StatusBar />
      <TopBar />
      <View style={styles.container}>
        <FlatList
          data={resultList}
          renderItem={({ item }) => {
            return (
              <ItemView
                item={item}
              />
            );
          }}
          keyExtractor={(item) => item.class_id.toString()}
        />
      </View>
    </ScrollView>
  );
}

export default Bookmark;
