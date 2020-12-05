import React, {useState, useContext, useEffect} from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import {styles} from '../../Utils/styles';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const WelcomeScreen = ({navigation, route}) => {
    return (
        <ScreenContainer style={styles.container}>
            <Text>Bienvenido</Text>
            <Button title='Iniciar Sesión' onPress={()=>navigation.push('SignIn')} />
            <Button title='Registrarse' onPress={()=>navigation.push('SignUp')} />
        </ScreenContainer>
    )
}