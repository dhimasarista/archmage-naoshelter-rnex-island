import { Box, Button, Text } from '@/components/ui';
import { ScrollView, StyleSheet } from 'react-native';

export default function ButtonsTestingScreen() {
  return (
    <ScrollView style={styles.container}>
      <Box padding={16}>
        <Text variant="title" style={styles.title}>Button Variants</Text>
        
        <Box margin={8}>
          <Text style={styles.label}>Primary Button</Text>
          <Button title="Primary Action" variant="primary" />
        </Box>

        <Box margin={8}>
          <Text style={styles.label}>Secondary Button</Text>
          <Button title="Secondary Action" variant="secondary" />
        </Box>

        <Box margin={8}>
          <Text style={styles.label}>Outline Button</Text>
          <Button title="Outline Action" variant="outline" />
        </Box>

        <Box margin={8}>
          <Text style={styles.label}>Loading State</Text>
          <Button title="Loading" loading variant="primary" />
        </Box>

        <Box margin={8}>
          <Text style={styles.label}>Disabled State</Text>
          <Button title="Disabled" disabled variant="primary" style={{ opacity: 0.5 }} />
        </Box>
      </Box>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 24,
  },
  label: {
    marginBottom: 8,
    opacity: 0.7,
  }
});