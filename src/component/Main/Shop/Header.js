import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const { height } = Dimensions.get('window');

export default class Header extends Component {
    render() {
        return (
            <View style={{height: height/8}}>
                <TouchableOpacity
                onPress={this.props.onOpen}
                >
                    <Text>Open menu</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
