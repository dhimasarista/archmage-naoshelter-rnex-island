import { Box, Text } from '@/components/ui';
import { House } from 'lucide-react-native';
import { StyleSheet } from 'react-native';
export default function HomeScreen() {
  return (
    <Box style={styles.container} padding={16}>
      <House size={48} color="#4A5568" style={{ marginBottom: 16 }} />
      <Text variant="title" style={styles.title}>Home Dashboard</Text>
      <Text style={styles.content}>
        Welcome to the testing sandbox workspace. Switch to the Components tab to start isolated testing.
      </Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 16,
  },
  content: {
    textAlign: 'center',
  },
});
