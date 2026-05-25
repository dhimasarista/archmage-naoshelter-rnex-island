import { Box, Text } from '@/components/ui';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function ComponentsIndexScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Box padding={16}>
        <Text variant="title" style={styles.title}>Testing Sandbox</Text>
        <Text variant="body" color="#60646C" style={styles.subtitle}>
          Select a component list to test it in isolation before using it in the main project.
        </Text>

        <TouchableOpacity 
          style={styles.listItem} 
          onPress={() => router.push('/components/buttons')}
        >
          <Box padding={16} backgroundColor="#E0E1E6" borderRadius={8} margin={4}>
            <Text weight="bold">1. Buttons</Text>
            <Text variant="small" color="#60646C">Test various button variants and states</Text>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.listItem} 
          onPress={() => router.push('/components/empty')}
        >
          <Box padding={16} backgroundColor="#E0E1E6" borderRadius={8} margin={4}>
            <Text weight="bold">2. Empty List</Text>
            <Text variant="small" color="#60646C">Placeholder for future components</Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 24,
  },
  listItem: {
    marginBottom: 8,
  }
});