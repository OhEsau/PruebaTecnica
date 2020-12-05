import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignInScreen} from './SignInScreen';
import {SignUpScreen} from './SignUpScreen';
import {WelcomeScreen} from './WelcomeScreen';

import {header} from '../../Utils/styles';

const AuthStack = createStackNavigator();

export const AuthStackScreen = () => (
    <AuthStack.Navigator screenOptions ={header}>
        <AuthStack.Screen 
            name='Welcome'
            component={WelcomeScreen}
            options={{title: 'Bienvenido'}}
        />
        <AuthStack.Screen 
            name='SignIn'
            component={SignInScreen}
            options={{title: 'Inicio'}}
        />
        <AuthStack.Screen 
            name='SignUp'
            component={SignUpScreen}
            options={{title: 'Registro'}}
        />
    </AuthStack.Navigator>
)
