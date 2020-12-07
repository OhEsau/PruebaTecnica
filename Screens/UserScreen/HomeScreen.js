import React, {useState, useContext, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ListItem, Avatar} from 'react-native-elements';

import {styles} from '../../Utils/styles';
import {getListBooks} from '../../Utils/conexiones'
import {SplashScreen} from '../../Utils/SplashScreen'

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const HomeScreen = ({navigation, route}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function obtenerLista(){
            const respuesta = await getListBooks();
            if(respuesta !== null){
                setData(respuesta)
                setLoading(false);
            }
        }
        obtenerLista();
    }, [])

    const ItemBook = ({item}) => {
        return(
            <ListItem bottomDivider onPress={()=>{navigation.navigate('Book', {id: item.id, genre: item.genre})}}>
                <Avatar 
                    size='medium'
                    source={item.image_url ?(
                        {uri: item.image_url}
                    ):(
                        require('../../Assets/logo.png')
                    )}
                />
                <ListItem.Content>
                    <ListItem.Title>
                        {item.title}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        {item.author}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <ScreenContainer style={styles.container}>
        { loading ? 
            (
                <SplashScreen message='Cargando Libros' />
            ):(
                <View>
                    <Text>Lista de libros</Text>
                    <FlatList 
                        data={data}
                        renderItem={ItemBook}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            )    
        }
        </ScreenContainer>
    )
}