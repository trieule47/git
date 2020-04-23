import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';    

const Tab = createBottomTabNavigator();

function MyTagMenu() {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    );
}

export default class Shop extends Component {
    render() {
        return (
            <MyTagMenu />
        )
    }
}
