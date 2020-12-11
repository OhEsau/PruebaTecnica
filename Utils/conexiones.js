import AsyncStorage from '@react-native-community/async-storage';


export async function getListBooks (){
    const datos= await fetch('http://35669ba47981.ngrok.io/books')
    .then(res => res.json())
    .then(data => {return data})
    return datos;
}