import { Box, Button, Text } from '@/components/ui';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useTheme } from '@/hooks/use-theme';
import { Bell, CircleHelp, Moon, Shield, User } from 'lucide-react-native';
import { Appearance, ScrollView, StyleSheet, Switch } from 'react-native';

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const theme = useTheme();
  
  const isDarkMode = colorScheme === 'dark';

  const toggleColorScheme = () => {
    Appearance.setColorScheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <Box padding={16}>
        <Text variant="title" style={styles.title}>Settings</Text>

        <Box padding={16} backgroundColor={theme.backgroundElement} borderRadius={12} margin={4} style={styles.row}>
          <Box style={styles.rowLeft}>
            <Moon size={24} color={theme.text} />
            <Text style={styles.rowText}>Dark Mode</Text>
          </Box>
          <Switch 
            value={isDarkMode} 
            onValueChange={toggleColorScheme} 
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#2f95dc' : '#f4f3f4'}
          />
        </Box>

        <Text variant="small" color={theme.textSecondary} style={styles.sectionTitle}>ACCOUNT</Text>
        
        <Box padding={16} backgroundColor={theme.backgroundElement} borderRadius={12} margin={4} style={styles.row}>
          <Box style={styles.rowLeft}>
            <User size={24} color={theme.text} />
            <Text style={styles.rowText}>Profile Profile</Text>
          </Box>
        </Box>

        <Box padding={16} backgroundColor={theme.backgroundElement} borderRadius={12} margin={4} style={styles.row}>
          <Box style={styles.rowLeft}>
            <Shield size={24} color={theme.text} />
            <Text style={styles.rowText}>Privacy & Security</Text>
          </Box>
        </Box>

        <Text variant="small" color={theme.textSecondary} style={styles.sectionTitle}>PREFERENCES</Text>

        <Box padding={16} backgroundColor={theme.backgroundElement} borderRadius={12} margin={4} style={styles.row}>
          <Box style={styles.rowLeft}>
            <Bell size={24} color={theme.text} />
            <Text style={styles.rowText}>Notifications</Text>
          </Box>
        </Box>

        <Box padding={16} backgroundColor={theme.backgroundElement} borderRadius={12} margin={4} style={styles.row}>
          <Box style={styles.rowLeft}>
            <CircleHelp size={24} color={theme.text} />
            <Text style={styles.rowText}>Help & Support</Text>
          </Box>
        </Box>

        <Box padding={16} margin={4}>
          <Button size={24} title="Log Out" variant="outline" style={{ borderColor: 'red' }} />
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
    marginTop: 16,
  },
  sectionTitle: {
    marginTop: 24,
    marginBottom: 8,
    marginLeft: 4,
    letterSpacing: 1.2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  rowText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '500',
  }
});