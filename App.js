import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import _ from 'lodash';
import axios from 'axios';

import Academy from './src/components/academy/Academy';
import Bookmark from './src/components/bookmark/Bookmark';
import Home from './src/components/home/Home';
import Portfolio from './src/components/portfolio/Portfolio';
import Account from './src/components/account/Account';
import IconWithBadge from './src/components/iconWithBadge/IconWithBadge';

const ROOT_URL = `https://demo-api.bigmind.io/v1`;

const Tab = createBottomTabNavigator();

function App() {
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

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon = null;

            switch (route.name) {
              case 'Academy':
                icon = focused ? <FontAwesome name={'book'} size={size} color={color} /> : <FontAwesome name={'book'} size={size} color={color} />;
                break;
              case 'Bookmark':
                icon = focused ? <IconWithBadge routeName={'Bookmark'} focused={focused} size={size} color={color} badgeCount={badgeCount} /> : <IconWithBadge routeName={'Bookmark'} focused={focused} size={size} color={color} badgeCount={badgeCount} />;
                break;
              case 'Home':
                icon = focused ? <MaterialIcons name={'home'} size={size} color={color} /> : <MaterialIcons name={'home'} size={size} color={color} />;
                break;
              case 'Portfolio':
                icon = focused ? <Entypo name={'pie-chart'} size={size} color={color} /> : <Entypo name={'pie-chart'} size={size} color={color} />;
                break;
              case 'Account':
                icon = focused ? <MaterialCommunityIcons name={'account'} size={size} color={color} /> : <MaterialCommunityIcons name={'account'} size={size} color={color} />;
                break;
              default:

            }

            return icon;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#33cc7f',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Academy" component={Academy} />
        <Tab.Screen name="Bookmark" component={Bookmark} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Portfolio" component={Portfolio} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
