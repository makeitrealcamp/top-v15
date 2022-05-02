import { View, Text, SectionList, StyleSheet } from 'react-native';
import faker from '@faker-js/faker';

const data = [
  {
    header: 'A',
    data: [
      {
        id: faker.datatype.uuid(),
        name: 'Alfonso',
        lastname: faker.name.lastName(),
      },
      {
        id: faker.datatype.uuid(),
        name: 'Andrea',
        lastname: faker.name.lastName(),
      },
    ]
  },
  {
    header: 'B',
    data: [
      {
        id: faker.datatype.uuid(),
        name: 'Braulio',
        lastname: faker.name.lastName(),
      },
    ]
  },
  {
    header: 'C',
    data: Array.from({ length: 50 }, () => ({
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
    }))
  },
];

export function Contacts() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} {item.lastname}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{section.header}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <Text>--------</Text>}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200
  },
  header: {
    backgroundColor: 'lightgrey',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

