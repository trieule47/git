import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Menu from './Menu';
import Shop from './Shop/Shop';
import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
            <Drawer.Navigator initialRouteName="Menu">
                <Drawer.Screen name="Shop" component={Shop} />
                <Drawer.Screen name="Menu" component={Menu} />
                <Drawer.Screen name="Authentication" component={Authentication} />
                <Drawer.Screen name="ChangeInfo" component={ChangeInfo} />
                <Drawer.Screen name="OrderHistory" component={OrderHistory} />
            </Drawer.Navigator>
    );
}

export default class Main extends Component {
    gotoAuthentication() {
        const { navigation } = this.props;
        navigation.push('Authentication');
    }
    gotoChangeInfo() {
        const { navigation } = this.props;
        navigation.push('ChangeInfo');
    }
    gotoOrderHistory() {
        const { navigation } = this.props;
        navigation.push('OrderHistory');
    }
    render() {
        return (
            <MyDrawer />
        );
    }
}

