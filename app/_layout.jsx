import { Stack } from "expo-router";
<<<<<<< HEAD
// Import your global CSS file
import "../global.css";
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
=======


import "../global.css";


export default function RootLayout() {
  return (<Stack
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name="index" />
    <Stack.Screen name="(tabs)" />
  </Stack>);
>>>>>>> 9074a00d6abca68eaa3b5abee23472a5a9551d73
}
