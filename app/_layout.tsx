// app/_layout.tsx
import { AuthProvider, useAuth } from "@/components/contexts/AuthContext";
import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";

function RootLayoutNav() {
  const { status } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    const inAuthGroup = segments[0] === "(auth)";
    const inAppGroup = segments[0] === "(tabs)";

    if (status === "signed-in" && inAuthGroup) {
      // Redirect to app if signed in
      router.replace("/(tabs)/home");
    } else if (status === "signed-out" && inAppGroup) {
      // Redirect to landing if signed out
      router.replace("/(auth)/landing");
    }
  }, [status, segments, router]);

  if (status === "loading") {
    return (
      <SafeAreaView style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
});
