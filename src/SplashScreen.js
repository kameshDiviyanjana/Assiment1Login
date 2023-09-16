import {useEffect} from 'react'
import { View,Text,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



function SplashScreen() {
  const navigation = useNavigation();
    // Simulate a delay for demonstration purposes
  useEffect(() => {
    setTimeout(() => {

      navigation.navigate('Home')
            
    
    }, 2000); // Adjust the duration as needed (2 seconds in this example)
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={colours.text}>Splash Screen</Text>
    </View>
  );
  
}

const colours = StyleSheet.create({

     text : {

        color : '#000000'
     }
})
export default SplashScreen