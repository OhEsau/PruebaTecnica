import AsyncStorage from '@react-native-community/async-storage';


export async function getListBooks (){
    fetch("http://192.168.1.103:3000/books", {method: 'GET'})
    .then(res => res.json())
    .then(data => console.log(JSON.parse(data))) 
}