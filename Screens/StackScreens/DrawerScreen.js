import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AccountScreen} from '../UserScreen/AccountScreen';
import {HomeScreen} from '../UserScreen/HomeScreen';
import {ConfigScreen} from '../UserScreen/ConfigScreen';
const Drawer = createDrawerNavigator();

export const UserNavigator = () => (
    <Drawer.Navigator initialRouteName='Home' >
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Account' component={AccountScreen}/>
        <Drawer.Screen name='Configs' component={ConfigScreen}/>
    </Drawer.Navigator>
)