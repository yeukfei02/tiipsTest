import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';

import Academy from './src/components/academy/Academy';
import Bookmark from './src/components/bookmark/Bookmark';
import Home from './src/components/home/Home';
import Portfolio from './src/components/portfolio/Portfolio';
import Account from './src/components/account/Account';

const Tab = createBottomTabNavigator();

function App() {
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
                icon = focused ? <MaterialIcons name={'favorite'} size={size} color={color} /> : <MaterialIcons name={'favorite-border'} size={size} color={color} />;
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
