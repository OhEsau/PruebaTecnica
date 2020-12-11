import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {AccountScreen} from '../UserScreen/AccountScreen';
import {HomeScreen} from '../UserScreen/HomeScreen';
import {ConfigScreen} from '../UserScreen/ConfigScreen';
import {BookScreen} from '../UserScreen/BooksScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const UserNavigator = () => (
    <Drawer.Navigator initialRouteName='Home' >
        <Drawer.Screen name='Home' component={BookNavigator}/>
        <Drawer.Screen name='Account' component={AccountScreen}/>
        <Drawer.Screen name='Configs' component={ConfigScreen}/>
    </Drawer.Navigator>
)

const BookNavigator = () =>(
    <Stack.Navigator>
        <Stack.Screen name='BookList' component={HomeScreen}/>
        <Stack.Screen name='BookItem' component={BookScreen}/>
    </Stack.Navigator>
)