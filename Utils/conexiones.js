import AsyncStorage from '@react-native-community/async-storage';


export async function getListBooks (){
    const datos= await fetch('http://91b61fcd5d5e.ngrok.io/books')
    .then(res => res.json())
    .then(data => {return data})
    return datos;
}