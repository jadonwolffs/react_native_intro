import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [state,setState] = useState(`Open up App.js to start working on your app!`)
  const [changed,setChanged] = useState(false);
  return (
    <View style={styles.container}>
      <Text>{changed ? state : `New text!`}</Text>
      <Text>Testing text...</Text>
      <Text/>
      <Button title="Change!" onPress={()=>{setChanged(!changed)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
