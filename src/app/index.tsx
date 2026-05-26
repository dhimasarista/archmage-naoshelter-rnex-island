import { Box, Text } from '@/components/ui';
import Logo from '@/components/ui/Logo';
import { StyleSheet } from 'react-native';
export default function HomeScreen() {
  return (
    <Box style={styles.container} padding={16}>
      <Box style={{
        marginHorizontal: 12,
        marginBottom: 32,
      }}>
        <Logo width={300} />
      </Box>
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
