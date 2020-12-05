import React, {useState, useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Input, Card, Button} from 'react-native-elements';
import {validateAll} from 'indicative/validator';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from '../../Utils/styles';
import {AuthContext}  from '../../Utils/authContext';


const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const SignInScreen = ({navigation}) => {
    const {signIn}  = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [entry, setEntry] = useState(true);
    const [error, setError] = useState({});
    const [visible, setVisible] = useState(false);

    const data = {
        email: email,
        password: pass,
        token: true,
    }
    
    const updateEntry = () =>{
        setEntry(!entry);
    }

    const changeVisibility = () => {
        setVisible(!visible);
    };

    useEffect(()=>{
        const handleSignIn = () =>{
            const rules = {
                email: 'required|email',
                password: 'required|string|min:8|max:40'
            }

            const mensajes = {
                required: field => `${field} no puede estar vacío`,
                'email.email': 'Ingrese un correo válido',
                'password.min': 'Mínimo 8 caracteres',
            }

            try{
                validateAll(data, rules, mensajes)
                    .then(async()=>{
                        await signIn(data);
                    }).catch(err => {
                        const formatError = {};
                        err.forEach(err => {
                            formatError[err.field] = err.message
                        });
                        setError(formatError);
                        changeVisibility();
                    })
            } catch(e){
                console.log(e.message);
            }
        }
        if(visible){
            handleSignIn();
        }
    }, [visible])

    return (
        <ScreenContainer style={styles.container}>
            <Text>Iniciar Sesión</Text>
            <Card>
                <Input 
                    label='Email'
                    placeholder='Ingresa tu Email'
                    value={email}
                    onChangeText={setEmail}
                    textContentType='emailAddress'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    errorStyle={{color: 'red'}}
                    errorMessage={error ? error.email : null}
                />
                <Input 
                    label='Contraseña'
                    placeholder='Ingresa tu contraseña'
                    value={pass}
                    onChangeText={setPass}
                    secureTextEntry = {entry}
                    errorStyle={{color: 'red'}}
                    errorMessage={error ? error.password : null}
                    rightIcon={
                        <TouchableOpacity onPress={()=>updateEntry()}>
                            {
                                entry ?
                                <Icon 
                                    name='eye'
                                    color='black'
                                    size={20}
                                />
                                :
                                <Icon 
                                    name='eye-slash'
                                    color='gray'
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    }
                />
                <Button 
                    title='Ingresar'
                    disabled={visible}
                    onPress={changeVisibility}
                    loading={visible}
                />
                <TouchableOpacity onPress={() => navigation.push('SignUp')}>
                    <Text>
                        ¿No tienes cuenta? Registrate aquí
                    </Text>
                </TouchableOpacity>
            </Card>
        </ScreenContainer>
    )
}