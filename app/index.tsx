// app/(auth)/landing.tsx
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// const { width } = Dimensions.get("window");

export default function LandingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Subtle decorative circles */}
      <View style={styles.decorativeCircle1} />
      <View style={styles.decorativeCircle2} />

      <View style={styles.hero}>
        {/* Badge */}
        <View style={styles.badge}>
          <View style={styles.badgeDot} />
          <Text style={styles.badgeText}>Ready to ship</Text>
        </View>

        <Text style={styles.logo}>Minimal.</Text>
        <Text style={styles.tag}>
          Beautifully simple starter for Expo + React Navigation
        </Text>
        <Text style={styles.description}>
          A clean foundation with auth flow, protected tabs, and a minimal
          design system so you can focus on features.
        </Text>

        {/* Feature highlights */}
        <View style={styles.features}>
          <View style={styles.featureItem}>
            <View style={styles.featureDot} />
            <Text style={styles.featureText}>Type-safe routing</Text>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureDot} />
            <Text style={styles.featureText}>Auth ready</Text>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureDot} />
            <Text style={styles.featureText}>Zero config</Text>
          </View>
        </View>

        <View style={{ height: 32 }} />

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/(auth)/login")}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>Get started</Text>
          {/* <Text style={styles.arrow}>→</Text> */}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => router.push("/(auth)/register")}
          activeOpacity={0.7}
        >
          <Text style={styles.linkButtonText}>Create account</Text>
        </TouchableOpacity>

        {/* Bottom accent line */}
        <View style={styles.accentLine} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 20,
  },
  decorativeCircle1: {
    position: "absolute",
    top: -100,
    right: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#f5f5f5",
    opacity: 0.5,
  },
  decorativeCircle2: {
    position: "absolute",
    bottom: -80,
    left: -80,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#f0f0f0",
    opacity: 0.6,
  },
  hero: {
    flex: 1,
    justifyContent: "center",
    zIndex: 1,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#f5f5f5",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#22c55e",
    marginRight: 6,
  },
  badgeText: {
    fontSize: 12,
    color: "#444",
    fontWeight: "500",
  },
  logo: {
    fontSize: 48,
    fontWeight: "700",
    letterSpacing: -2,
    marginBottom: 12,
    color: "#111",
  },
  tag: {
    fontSize: 18,
    color: "#111",
    marginBottom: 16,
    fontWeight: "500",
  },
  description: {
    color: "#666",
    lineHeight: 24,
    maxWidth: 560,
    fontSize: 15,
  },
  features: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    gap: 16,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  featureDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#111",
    marginRight: 8,
  },
  featureText: {
    fontSize: 13,
    color: "#444",
    fontWeight: "500",
  },
  primaryButton: {
    backgroundColor: "#111",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    width: "100%",
    maxWidth: 320,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    marginRight: 8,
  },
  arrow: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  linkButton: {
    marginTop: 16,
    paddingVertical: 8,
  },
  linkButtonText: {
    color: "#111",
    opacity: 0.7,
    fontSize: 15,
    fontWeight: "500",
  },
  accentLine: {
    display: "none",
    position: "absolute",
    bottom: 40,
    left: 0,
    width: 60,
    height: 3,
    backgroundColor: "#111",
    borderRadius: 2,
  },
});
