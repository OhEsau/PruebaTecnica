import React, {useState, useContext, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';

import {styles} from '../../Utils/styles';
import {getListBooks} from '../../Utils/conexiones';
import {SplashScreen} from '../../Utils/SplashScreen'

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const BookScreen = ({navigation, route}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function obtenerLista(){
            const respuesta = await getListBooks();
            if(respuesta !== null){
                respuesta.forEach((x)=>{
                    if(x.id===route.params.id || x.genre === route.params.genre){
                        setData( arr=> [...arr,{
                            id: x.id,
                            author: x.author,
                            title: x.title,
                            genre: x.genre,
                            publisher: x.publisher,
                            year: x.year,
                            image_url: x.image_url,
                        }]
                        )
                    }
                })
            }
            setLoading(false);
        }
        obtenerLista();
    }, [])

    return (
        <ScreenContainer style={styles.container}>
            {loading ? (
                <SplashScreen message='Espere por favor' />
            ):(
                <View>
                    <Text>Catálogo de Libros {route.params.id}, {route.params.genre}</Text>
                    <Text>{JSON.stringify(data)} </Text>
                </View>
            )

            }
        </ScreenContainer>
    )
}