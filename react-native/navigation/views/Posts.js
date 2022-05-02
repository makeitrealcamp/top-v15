import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ActivityIndicator, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';

export function Posts() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts'
    })
      .then(({ data }) => setPosts(data))
      .catch(e => setError(e))
      .finally(() => setLoading(false))
  }, [])

  return (
    <View style={styles.container}>
      <Text>Post</Text>
      {loading && <ActivityIndicator size="large" />}
      <FlatList
        data={posts}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button
              title="More details"
              onPress={() => navigation.navigate('Post', {
                hola: 'mundo',
                id: item.id,
              })}
            />
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
