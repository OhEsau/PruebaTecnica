import React, {useState, useContext, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from '../../Utils/styles';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const PageScreen = ({navigation, route}) => {
    return (
        <ScreenContainer style={styles.container}>
            <Text>Descripción del Libro</Text>
        </ScreenContainer>
    )
}