import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Animated} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ListItem, Avatar} from 'react-native-elements';

import {styles} from '../../Utils/styles';
import {getListBooks} from '../../Utils/conexiones';
import {SplashScreen} from '../../Utils/SplashScreen'

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const BookScreen = ({navigation, route}) => {

    const [data, setData] = useState([]);
    const [bookListSimilar, setBookListSimilar] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function obtenerLista(){
            const respuesta = await getListBooks();
            if(respuesta !== null){
                respuesta.forEach((x)=>{
                    if(x.id===route.params.id){
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
                    if(x.id!==route.params.id && x.genre===route.params.genre){
                        setBookListSimilar(arr => [...arr,{
                            id: x.id,
                            author: x.author,
                            title: x.title,
                            genre: x.genre,
                            publisher: x.publisher,
                            year: x.year,
                            image_url: x.image_url,
                        }]
                        )
                    } else {
                        setBookListSimilar(null)
                    }
                })
            }
            setLoading(false);
        }
        obtenerLista();
    }, [])

    const SimilarBooks = ({item}) => {
        return(
            <ListItem bottomDivider onPress={()=>{navigation.push('BookItem', {id: item.id, genre: item.genre})}}>
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
            {loading ? (
                <SplashScreen message='Espere por favor' />
            ):(
                <View>
                    <ListItem bottomDivider>
                        <Avatar 
                            size='xlarge'
                            source={data[0].image_url ?(
                                {uri: data[0].image_url}
                            ):(
                                require('../../Assets/logo.png')
                            )}
                        />
                    <ListItem.Content>
                    <ListItem.Title>
                        {data[0].title}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        {data[0].author}
                        {data[0].genre}
                        {data[0].year}
                        {data[0].publisher}
                    </ListItem.Subtitle>
                    </ListItem.Content>
                    </ListItem>

                    {
                        bookListSimilar ? (
                            <View>
                                <Text>Libros similares</Text>
                                <View></View>
                                <FlatList 
                                    data={bookListSimilar}
                                    renderItem={SimilarBooks}
                                    keyExtractor={item => item.id.toString()}
                                />
                            </View>
                        ) : (
                            <Text>Nuevos libros proximamente</Text>
                        )
                    }
                </View>
            )

            }
        </ScreenContainer>
    )
}