import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  Image,
} from 'react-native';
import { Users } from './components/Users';
import { Contacts } from './components/Contacts';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Press Me!"
        onPress={() => setCount(prevCount => prevCount + 1)}
      />
      <Image
        style={styles.image}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg' }}
      />
      <Contacts />
      <Users />
      <Text>{count}</Text>
      <TouchableOpacity>
        <Text>Hola mundo</Text>
      </TouchableOpacity>
      <TouchableHighlight>
        <Text>Hola mundo</Text>
      </TouchableHighlight>
      <View style={styles.section}>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
        <Text>lorem ipsum</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    height: 100,
    borderStyle: 'solid',
    borderColor: 'goldenrod',
    borderWidth: 1,
    overflow: 'hidden'
  },
  image: {
    width: 300,
    height: 300
  }
});
