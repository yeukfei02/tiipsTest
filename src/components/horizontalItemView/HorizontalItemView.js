import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import _ from 'lodash';
import axios from 'axios';

const ROOT_URL = `https://demo-api.bigmind.io/v1`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: 'lightgray'
  },
  favouriteIcon: {
    alignSelf: 'flex-end'
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 10,
    alignSelf: 'center'
  },
  titleText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 8,
    marginBottom: 6,
    alignSelf: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
});

function HorizontalItemView({ item }) {

  useEffect(() => {
    // getProductLogo();
  }, []);

  const getProductLogo = async () => {
    const id = item.product_id;
    const response = await axios.get(`${ROOT_URL}/products/logos/${id}`);
    console.log("response.data = ", response.data);
  }

  const getClosingPrice = () => {
    let result = '';

    if (item && item.close_price) {
      result = `$${item.close_price.toFixed(3)}`;
    }

    return result;
  }

  const getPercentageChange = () => {
    let result = '';

    if (item && item.change_percentage) {
      result = `(${item.change_percentage}%)`;
    }

    return result;
  }

  const renderFavouriteIcon = () => {
    let favouriteIcon = null;

    if (item) {
      if (_.isEqual(item.bookmark, "Y")) {
        favouriteIcon = (
          <MaterialIcons style={styles.favouriteIcon} name={'favorite'} size={20} color={'red'} />
        );
      } else if (_.isEqual(item.bookmark, "N")) {
        favouriteIcon = (
          <MaterialIcons style={styles.favouriteIcon} name={'favorite-border'} size={20} color={'black'} onClick={handleFavouriteIconClick} />
        );
      }
    }

    return favouriteIcon;
  }

  const handleFavouriteIconClick = () => {
    console.log(123);
  }

  return (
    <Card style={styles.container}>
      {renderFavouriteIcon()}
      <Image
        style={styles.logo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.titleText}>{item.name}</Text>
      <View style={styles.rowContainer}>
        <Text style={{ marginRight: 5 }}>{getClosingPrice()}</Text>
        <Text>{getPercentageChange()}</Text>
      </View>
    </Card>
  );
}

export default HorizontalItemView;
