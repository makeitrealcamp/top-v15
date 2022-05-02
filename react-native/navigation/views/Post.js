import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native'
import axios from 'axios'

export function Post() {
  const route = useRoute();

  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: `/posts/${route.params.id}`
    })
      .then(({ data }) => setPost(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <View style={styles.container}>
      <Text>Post</Text>
      {loading && <ActivityIndicator size="large" />}
      {post && (
        <View>
          <Text>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      )}
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
