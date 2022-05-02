import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';

export default function App() {
  // const [cameraRollPermission, setCameraRollPermission] = useState('denied');
  const [cameraRollPermission, requestCameraRollPermission] = ImagePicker.useMediaLibraryPermissions();
  const [cameraPermission, setCameraPermission] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    // ImagePicker
    //   .requestMediaLibraryPermissionsAsync()
    //   // status = 'denied' | 'granted'
    //   .then(({ status }) => setCameraRollPermission(status))
    requestCameraRollPermission();

    ImagePicker
      .requestCameraPermissionsAsync()
      .then(({ status }) => setCameraPermission(status === 'granted'))
  }, []);

  async function handlePickImage() {
    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3]
    });

    if(!data.cancelled) {
      setImage(data)
    }
  }

  async function handlePhoto() {
    const data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3]
    });

    if(!data.cancelled) {
      setImage(data)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {cameraRollPermission !== 'granted' ? (
        <Button
          title="Selecciona una imagen"
          onPress={handlePickImage}
        />
      ) : (
        <Text>No tienes permisos para la galeria</Text>
      )}
      {cameraPermission ? (
        <Button
          title="Toma una foto"
          onPress={handlePhoto}
        />
      ) : (
        <Text>No tienes permisos para la camara</Text>
      )}
      {!!image && (
        <Image
          style={styles.image}
          source={{ uri: image.uri }}
        />
      )}
      <StatusBar style="auto" />
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
  image: {
    width: 400,
    height: 300,
  }
});
