import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Login',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          title: 'tabs',
          headerShown: true,
        }}
      />
    </Stack>
  );
}
