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
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: 'lightgray',
  },
  favouriteIcon: {
    alignSelf: 'flex-end'
  },
  logo: {
    width: 120,
    height: 80,
    marginTop: 10,
    alignSelf: 'center'
  },
  titleText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    alignSelf: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
});

function HorizontalItemView({ item }) {
  const [favouritesClicked, setFavouritesClicked] = useState(false);

  useEffect(() => {
    // getProductLogo();
  }, []);

  const getProductLogo = async () => {
    const id = item.product_id;
    const response = await axios.get(`${ROOT_URL}/products/logos/${id}`);
    console.log("response.data = ", response.data);
  }

  const renderFavouriteIcon = () => {
    let favouriteIcon = null;

    if (item) {
      if (_.isEqual(item.bookmark, "Y") || favouritesClicked) {
        favouriteIcon = (
          <MaterialIcons style={styles.favouriteIcon} name={'favorite'} size={25} color={'red'} onPress={handleFavouriteIconClick} />
        );
      } else {
        favouriteIcon = (
          <MaterialIcons style={styles.favouriteIcon} name={'favorite-border'} size={25} color={'black'} onPress={handleFavouriteIconClick} />
        );
      }
    }

    return favouriteIcon;
  }

  const handleFavouriteIconClick = () => {
    if (!favouritesClicked) {
      setFavouritesClicked(true);
    } else {
      setFavouritesClicked(false);
    }
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

  return (
    <View>
      <Card style={styles.container}>
        {renderFavouriteIcon()}
        <Image
          style={styles.logo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </Card>
      <View>
        <Text style={styles.titleText}>{item.name}</Text>
        <View style={styles.rowContainer}>
          <Text style={{ marginRight: 5 }}>{getClosingPrice()}</Text>
          <Text>{getPercentageChange()}</Text>
        </View>
      </View>
    </View>
  );
}

export default HorizontalItemView;
