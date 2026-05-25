import { Stack } from 'expo-router';

export default function ComponentsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Components' }} />
      <Stack.Screen name="buttons" options={{ title: 'Buttons Test' }} />
      <Stack.Screen name="empty" options={{ title: 'Empty' }} />
    </Stack>
  );
}