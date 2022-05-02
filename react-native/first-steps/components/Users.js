import faker from '@faker-js/faker';
import { StyleSheet, FlatList, View, Text } from 'react-native';

const data = Array.from({ length: 50 }, () => ({
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
}));

export function Users() {
  return (
    <View style={styles.container}>
      <Text>Users</Text>
      <FlatList
        data={[]}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} {item.lastname}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text>No hay elementos</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 300,
  }
})
