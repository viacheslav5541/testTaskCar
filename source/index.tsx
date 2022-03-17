import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { CartScreen } from './components/cart/CartScreen';
import { DetailScreen } from './components/details/DetailIScreen';
import { HomeScreen } from './components/home/HomeScreen';



const MainNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            header: () => null,
        }
    },
    FinalScreen: {
        screen: CartScreen,
        navigationOptions: {
            header: () => null,
        }
    },
    DetailScreen: {
        screen: DetailScreen,
        navigationOptions: {
            header: () => null,
        }
    },

})


const RootStack = createAppContainer(MainNavigator);

export default RootStack;