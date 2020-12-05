import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const UserNavigator = () =>{
    <Drawer.Navigator>
        <Drawer.Screen name='Home' />
        <Drawer.Screen name='BookList' />
        <Drawer.Screen name='Account' />
        <Drawer.Screen name='Configs' />
    </Drawer.Navigator>
}

export const GuestNavigator = () =>{
    <Drawer.Navigator>
        <Drawer.Screen name='Home' />
        <Drawer.Screen name='BookList' />
        <Drawer.Screen name='Account' />
        <Drawer.Screen name='Configs' />
    </Drawer.Navigator>
}