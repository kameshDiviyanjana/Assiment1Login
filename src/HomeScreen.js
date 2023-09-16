// HomeScreen.js
import React from 'react';
import { View, Text,Image,StyleSheet, Button,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';



function HomeScreen() {
 
  const navigation = useNavigation();

  const data =[
    {
      ID:	0,
FirstName:	'Daenerys',
LastName:	'Targaryen',
FullName:	'DaenerysTargaryen',
Title:	'MotherofDragons',
Family:'	House Targaryen',
https:'https://thronesapi.com/assets/images/daenerys.jpg',
    
 
  },


  {

    ID:	1,
    FirstName:'Samwell',
    LastName:	'Tarly',
    FullName:	'Samwell Tarly',
    Title:	'Maester',
    Family:	'House Tarly',
  

    https:'https://thronesapi.com/assets/images/sam.jpg'
  },

  {
    ID:	3,
    FirstName:	'Arya',
    LastName:	'Stark',
    FullName:	'Arya Stark',
    Title:	'No One',
    Family:	'House Stark',
 
   
    https:'https://thronesapi.com/assets/images/arya-stark.jpg'
    
  },
  {
    D:	2,
FirstName:'	Jon',
LastName:	'Snow',
FullName:	'Jon Snow',
Title:	'King of the North',
Family:	'House Stark',


https:'https://thronesapi.com/assets/images/jon-snow.jpg'

  },{
    
ID:	5,
FirstName:	'Brandon',
LastName:	'Stark',
FullName:	'Brandon Stark',
Title:	'Lord of Winterfell',
Family:	'House Stark',
https:'https://thronesapi.com/assets/images/bran-stark.jpg'

  }
  ]
   
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>

      <view>
       <FlatList   data ={data} 
        renderItem={({item})=>(
          <View>
            <Text style={{fontSize : 10, left: 0}} onPress={(navigation.navigate('Home')  )} >{item.FullName}</Text>
            <Image source={{uri: item.ImageURL}} style={{height : 200,width:200, right: 0,top: 0,position : 'absolute'}}/>
             
          </View>
        )}/>
      </view>
      <View style={st.imageContainer} >
      <Image source={require('./assests/logout-1024.webp')} style = {st.image}  />
      <Text onPress={() =>{ navigation.navigate('Home')}}>logout</Text>
      </View>
     
    </View>
  );
}

const st = StyleSheet.create({

  imageContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 16, // Adjust as needed
  },
  image: {
    width: 50, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    resizeMode: 'contain', // Adjust the resizeMode as needed
  },
})

export default HomeScreen;
