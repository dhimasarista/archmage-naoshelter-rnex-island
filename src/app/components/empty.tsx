import { Text } from '@/components/ui';
import { StyleSheet, View } from 'react-native';

export default function EmptyTestingScreen() {
  return (
    <View style={styles.container}>
      <Text variant="title">Empty List</Text>
      <Text>No testing content here yet.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});