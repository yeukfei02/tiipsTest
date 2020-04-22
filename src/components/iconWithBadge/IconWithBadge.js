import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import _ from 'lodash';
import axios from 'axios';

const ROOT_URL = `https://demo-api.bigmind.io/v1`;

function IconWithBadge({ routeName, focused, size, color }) {
  const [badgeCount, setBadgeCount] = useState(0);

  useEffect(() => {
    getBadgeCount();
  }, []);

  const getBadgeCount = async () => {
    let count = 0;

    // getBadgeCount from request
    const response = await axios.get(`${ROOT_URL}/products/classes`);
    if (response && response.data.data) {
      for (let a = 0; a < response.data.data.length; a++) {
        const obj = response.data.data[a];
        if (obj) {
          for (let b = 0; b < obj.Details.length; b++) {
            const item = obj.Details[b];
            if (_.isEqual(item.bookmark, "Y")) {
              count += 1;
            }
          }
        }
      }
    }

    setBadgeCount(count);
  }

  const renderIcon = () => {
    let icon = (
      <MaterialIcons name={'favorite-border'} size={size} color={color} />
    );

    if (_.isEqual(routeName, 'Bookmark')) {
      if (focused) {
        icon = (
          <MaterialIcons name={'favorite'} size={size} color={color} />
        );
      } else {
        icon = (
          <MaterialIcons name={'favorite-border'} size={size} color={color} />
        );
      }
    }

    return icon;
  }

  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      {renderIcon()}
      <View
        style={{
          // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
          position: 'absolute',
          right: -6,
          top: -3,
          backgroundColor: 'red',
          borderRadius: 10,
          width: 16,
          height: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 8, fontWeight: 'bold' }}>
          {badgeCount}
        </Text>
      </View>
    </View>
  );
}

export default IconWithBadge;
