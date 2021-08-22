import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator,
    StackActions
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Flex from './study/index'
import FlexTwo from './study/test'
// import Tab from './study/tabbar'
import { getFontStyleObject } from './utils/font';
import { fromRightWithFade } from './utils/navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeIconWithBadge from './cmp/badge'
const defaultHeaderObject = {

};
const createDefaultStackNavigator = (screensObject, customOptions) =>
    createStackNavigator(screensObject, {
        defaultNavigationOptions: { ...defaultHeaderObject },
        cardStyle: {
            backgroundColor: '#000'
        },
        headerMode: 'screen',
        transitionConfig: () => fromRightWithFade(),
        ...customOptions
    });

const FlexStack = createDefaultStackNavigator({
    ['flex']: { screen: Flex },
    ['flex2']: { screen: FlexTwo }
})

const FlexStack0 = createDefaultStackNavigator({
    ['flex2']: { screen: FlexTwo }
})


export const RootStack = createAppContainer(
    createBottomTabNavigator({
        ['HomeStack']: { screen: FlexStack },
        ['dd']: { screen: FlexStack0 }
    },

        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    const { routeName } = navigation.state;
                    let IconComponent = Ionicons;
                    let iconName;
                    if (routeName === 'HomeStack') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                        // Sometimes we want to add badges to some icons.
                        // You can check the implementation below.
                        IconComponent = HomeIconWithBadge;
                    } else if (routeName === 'dd') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }

                    // You can return any component that you like here!
                    return <IconComponent name={iconName} size={25} color={tintColor} />;
                },
            }),
            tabBarOptions: {
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            },
        }
    )
)