import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../Header'

const { height } = Dimensions.get('window');

export default class Home extends Component {
    openMenu(){
        this.props.navigation.openDrawer();
    }
    render() {
        return (
            <View style={{ backgroundColor: 'red', flex: 1 }}>
                <Header onOpen = {()=> {this.openMenu()}} />
                <Text>Home</Text>
            </View>
        )
    }
}
