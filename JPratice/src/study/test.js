import React, { Component } from 'react'

import { View, Text, StatusBar } from 'react-native'

export default class FlexDimensionsBasics extends Component {
    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content');
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }
    render() {
        const { navigation } = this.props;
        return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
                <View style={{ flex: 2, backgroundColor: 'red' }} />
                <View style={{ flex: 3, backgroundColor: 'steelblue' }}>
                    <Text>
                        otherParam:
                    {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
                    </Text>
                </View>
            </View>
        );
    }
}