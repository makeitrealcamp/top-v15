import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  async handleNotification() {
    return {
      shouldSetBadge: false,
      shouldPlaySound: false,
      shouldShowAlert: true,
    }
  }
})

export default function App() {
  const [notificationPermissions, setNotificationPermissions] = useState('denied');
  const [notificationToken, setNotificationToken] = useState('');
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    Notifications.getPermissionsAsync()
      .then(({ status }) => {
        if(status === 'denied') {
          Notifications.requestPermissionsAsync()
            .then(({ status }) => {
              setNotificationPermissions(status)
            })
        } else {
          setNotificationPermissions(status)
        }
      })

    Notifications.getExpoPushTokenAsync()
      .then(res => setNotificationToken(res))

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => console.log(notification))
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => console.log(response))

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    }
  }, []);

  async function handlePress() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Notification title',
        body: 'Notification body blah blah lorem ipsum dolor',
        data: { data: 'data' }
      },
      trigger: { seconds: 1 },
    })
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {notificationPermissions && (
        <Button
          title="send notification"
          onPress={handlePress}
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
});
