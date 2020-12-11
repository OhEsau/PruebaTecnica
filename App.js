import React, {useState, useEffect, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'

import {AuthContext} from './Utils/authContext';
import {SplashScreen} from './Utils/SplashScreen';
import {RootStackScreen} from './Screens/StackScreens/RootStack'

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(false);
  const [message, setMessage] = useState('Espera un segundo por favor');

  const authContext = useMemo(()=>{
    return {
      signIn: async (data) => {
        setIsLoading(true);
        setMessage('Esperando Respuesta');
        try{
          //let infoUser = await AsyncStorage.getItem('dataUser');
          setMessage('Iniciando sesión')
          //infoUser = JSON.parse(infoUser);
          setUserToken(true);
          setIsLoading(false);
        } catch(e) {
          alert('Inicio Fallido')
        }
        setIsLoading(false)
      },

      signUp: async(data) =>{
        setIsLoading(true);
        setMessage('Registrando nuevo usuario');
        try {
          //const registro = await registrarUsuario(data);
        } catch (e){
          console.log(e);
          alert('Falló el registro')
          setMessage('Regresando al menú principal');
        }
        setIsLoading(false);
      },

      signOut: async () => {
        setIsLoading(true);
        setMessage('Saliendo de la aplicación')
        try{
          await AsyncStorage.removeItem('dataUser');
          setUserToken(false);
        } catch(e){
          console.log(e)
        }
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if(isLoading){
    return <SplashScreen message={message}/>
  }

  return(
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken}/>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}