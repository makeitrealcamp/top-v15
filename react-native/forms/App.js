import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Switch } from 'react-native';
import { useState } from 'react';
import { PickerIOS, Picker } from '@react-native-picker/picker';

export default function App() {
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);
  const [terms, setTerms] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState();

  function handleSubmit() {
    console.log({ email, age, password, show, terms })
  }

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        placeholder="example@gmail.com"
        onChangeText={value => setEmail(value)}
        value={email}
      />
      <Text>Age</Text>
      <TextInput
        placeholder="18"
        onChangeText={value => setAge(value)}
        value={age}
        keyboardType="number-pad"
      />
      <Text>Password</Text>
      <TextInput
        placeholder="*******"
        onChangeText={value => setPassword(value)}
        value={password}
        secureTextEntry={show}
      />
      <Button
        title="ver/ocultar"
        onPress={() => setShow(prevShow => !prevShow)}
      />
      <Switch
        onValueChange={value => setTerms(value)}
        value={terms}
      />
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={itemValue =>
          setSelectedLanguage(itemValue)
        }
      >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="GoLang" value="go" />
          <Picker.Item label="Rust" value="rs" />
      </Picker>
      <Button
        title="Crear usuario"
        onPress={handleSubmit}
      />
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
