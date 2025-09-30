// app/(tabs)/home.tsx
import { useAuth } from "@/components/contexts/AuthContext";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centered}>
        <Text style={styles.h1}>Home</Text>
        <Text style={styles.muted}>Hello, {user?.email ?? "friend"} 👋</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  h1: { fontSize: 28, fontWeight: "700", marginBottom: 8 },
  muted: { color: "#666", marginTop: 6 },
});
