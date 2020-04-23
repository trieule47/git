import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ChangeInfo extends Component {
    goBackToMain(){
        const { navigation } = this.props;
        navigation.goBack();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#84B4B4' }}>
                <Text>ChangeInfo Component</Text>
                <TouchableOpacity
                    onPress = {this.goBackToMain.bind(this)}
                >
                    <Text>Nhấn để về main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

