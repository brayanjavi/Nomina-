import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity,StyleSheet } from "react-native";
import { LoginService } from "@/services/AuthService";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        LoginService(email, password).then((data) => {
            console.log("datos Login", data);
        }).catch((error) => {
            console.log("error", error);
        });
    };
    return (
        <View>
            <Text>Login</Text>
            <Text>Email</Text>
            <TextInput
                placeholder="Email"
                onChangeText={(dato) => { setEmail(dato) }}
                value={email}
            />
            <Text>Password</Text>
            <TextInput
                placeholder="Password"
                onChangeText={(dato) => { setPassword(dato) }}
                value={password}
            />
           <TouchableOpacity onPress={handleLogin}>
                <Text>Login</Text>
            </TouchableOpacity>        
   
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
    countContainer: {
      alignItems: 'center',
      padding: 10,
    },
  });
  
export default Login;