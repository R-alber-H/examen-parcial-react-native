import { AuthProvider } from "@/context/AuthContext";
import { ProductosProvider } from "@/context/ProductosContext";
import { Stack } from "expo-router";
import "react-native-reanimated";
import "../global.css";

export default function RootLayout() {
  return (
    <AuthProvider>
      <ProductosProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />
          <Stack.Screen name="registro" />
          <Stack.Screen name="home" />
          <Stack.Screen name="productos" />
        </Stack>
      </ProductosProvider>
    </AuthProvider>
  );
}
