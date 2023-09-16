import React,{useState} from "react";
import { View, Text, TextInput, Button, StyleSheet,SafeAreaView } from 'react-native';
//import {auth} from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 


const Register = ()=>{
 
     const [name,setname] = useState('')
     const [email,setemail] = useState('')
     const [password,setPassword] = useState('')
     const [conformpassword,setconformpassword] = useState('')

  const registeruser = ()=>{
/*
    if(password == conformpassword){
       
         setDoc(doc(auth, "user", name), {
            name: name,
            email: email,
            password: password
          });
          

    }else{

        console.log('RE enter password')
    }
  
      */
  }
     return(

        <SafeAreaView style ={styles.container}>
            <View style = {styles.input}>
                <TextInput 
                  placeholder="User Name"
                  onChangeText={text => setname(text)}
                  value={name}/>
            </View>
            <View style = {styles.input}>
                <TextInput 
                  placeholder="Email"
                  onChangeText={text => setemail(text)}
                  value={email}/>
            </View>
            <View style = {styles.input}>
                <TextInput 
                  placeholder="Password"
                  onChangeText={text => setPassword(text)}
                  value={password}/>
            </View>
            <View style = {styles.input}>
                <TextInput 
                  placeholder="Conform Password"
                  onChangeText={text => setconformpassword(text)}
                  value={conformpassword}/>
            </View>

            <View>
                <Button title="Register" onPress={registeruser}/>
            </View>
        </SafeAreaView>
     )
  
}

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


  export default Register
