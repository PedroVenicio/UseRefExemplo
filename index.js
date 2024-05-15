import {View, Button, Text, TextInput, StyleSheet} from 'react-native';
import {useRef} from 'react';

export default function App(){
  
  const inputRef = useRef();

  return (
    <View style={styles.container}>
      <Text style={styles.texto} >Login</Text>

      <TextInput style={styles.input} ref={inputRef} placeholder='email'/>

      <Button onPress={() => {
        inputRef.current.focus();
        }} 
        title='logar'/>
    </View>
 );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  texto: {
    fontSize: 30,
    marginBottom: 10,
  },

  input: {
    borderWidth: 2,
    borderColor: 'red',
  }
}
)
