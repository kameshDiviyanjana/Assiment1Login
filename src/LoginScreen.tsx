// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,SafeAreaView} from 'react-native';
//import {auth} from '../firebase';
import { useNavigation } from '@react-navigation/core';
import { doc, getDoc } from "firebase/firestore";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation  = useNavigation()

  const handleLogin = async () => {
  /*  try {
    
      const docRef = doc(auth, "cities", email);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
      
        navigation.navigate('Home' as never)
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      
     
    } catch (error) {
      console.error('Login error:', error);
      
    }*/
  };

 

  return (
    <SafeAreaView>
 <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />

       
    </View> 
    <View>
    <Text onPress={() => navigation.navigate('Home' as never)}>i have no Accounnt</Text>
    </View>
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});

export default LoginScreen;
