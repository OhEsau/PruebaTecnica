import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackScreen} from '../AuthScreen/AuthStackScreen';
import {UserNavigator} from './DrawerScreen'

const RootStack = createStackNavigator();

export const RootStackScreen = ({userToken, clientType}) => (
    <RootStack.Navigator headerMode="none">
        {userToken ? (
            <RootStack.Screen 
                name='User'
                component={UserNavigator}
            />            
        ) : (
            <RootStack.Screen 
                name='Auth'
                component={AuthStackScreen}
            />
        )}
        
    </RootStack.Navigator>
)