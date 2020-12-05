import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackScreen} from '../AuthScreen/AuthStackScreen';
import {UserNavigator, GuestNavigator} from './DrawerScreen'

const RootStack = createStackNavigator();

export const RootStackScreen = ({userToken, clientType}) => (
    <RootStack.Navigator headerMode="none">
        {userToken ? (
            clientType ? (
                <RootStack.Screen 
                    name='User'
                    component={UserNavigator}
                />
            ) : (
                <RootStack.Screen 
                    name='Guest'
                    component={GuestNavigator}
                />
            )
        ) : (
            <RootStack.Screen 
                name='Auth'
                component={AuthStackScreen}
            />
        )}
        
    </RootStack.Navigator>
)