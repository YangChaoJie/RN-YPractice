import React, { Component } from 'react'

import { View, Button, SafeAreaView, StyleSheet, Text, StatusBar, ScrollView } from 'react-native'

import test from './test'
import { Tabs } from '@ant-design/react-native'
const tabs = [
    { title: 'ToDo' },
    { title: '二建' },
    { title: '考研' },
    { title: '网校' },
    { title: '药剂师' },
    { title: '注册会计师' },
    { title: '工程师' },
    { title: '打客服' },
    { title: '中业教育' }
]

const renderContent = (tab, index) => {
    const style = {
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#ddd',
    }
    const content = [1, 2, 3].map(i => {
        return (
            <View key={`${index}_${i}`} style={style}>
                <Text>
                    {tab.title} - {i}
                </Text>
                <View style={styles.container}>
                    <Text>Content of First Tab</Text>
                    <View style={{ flex: 2, backgroundColor: 'skyblue' }}>
                        <Button
                            title="Go to Jane's profile"
                            onPress={() => alert('saf')} />
                    </View>
                    <View style={{ flex: 3, backgroundColor: 'steelblue' }} />

                </View>
            </View>
        )
    })
    return <ScrollView style={{ backgroundColor: '#fff' }}>{content}</ScrollView>
}



export default class FlexDimensionsBasics extends React.Component {
    static navigationOptions = {
        tabBarVisible: false,
        header: null, // 隐藏 导航栏
        title: 'Home',
        headerStyle: {
            backgroundColor: '#f04e3f',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ffff'
        }
    }

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('light-content');
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }

    render() {
        const { navigate } = this.props.navigation;
        const tabs = [
            { title: 'TODO' },
            { title: '二建1' },
            { title: '考研' },
            { title: '网校' },
            { title: '药剂师' },
            { title: '注册会计师' },
            { title: '工程师' },
            { title: '打客服' },
            { title: '中业教育' }
        ]

        const style0 = {
            alignItems: 'center',
            justifyContent: 'center',
            height: 150,
            backgroundColor: '#fff',
        }
        return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?

            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'skyblue' }} >
                    <SafeAreaView style={[{ backgroundColor: '#f04e3f' }]}>
                        <StatusBar barStyle="light-content" backgroundColor="#f04e3f" />
                        {/* <Text style={{ color: '#fff' }}>Light Screen</Text> */}
                    </SafeAreaView>
                    <Tabs tabs={tabs} tabBarBackgroundColor='#f04e3f' tabBarTextStyle={{ color: 'white', fontWeight: '500', fontSize: 16 }} tabBarUnderlineStyle={{ backgroundColor: 'white' }} initialPage={1} tabBarPosition="top">
                        {renderContent}

                    </Tabs>
                </View>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    }
});