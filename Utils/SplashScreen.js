import React from 'react';
import { View, Text, ActivityIndicator, Image} from "react-native";
import {styles} from '../Utils/styles'

const ScreenContainer = ({ children }) => (
    <View style={styles.splash}>{children}</View>
);

export const SplashScreen = (props) => (
    <ScreenContainer>
      <Image source={require('../Assets/logo.png')} style={{height: 300, width: 150}} />
      <Text style ={styles.container}>{props.message}</Text>
      <Text style ={styles.container}>Cargando...</Text>
      <ActivityIndicator size='large' color='#44C2CF'/>
    </ScreenContainer>
);