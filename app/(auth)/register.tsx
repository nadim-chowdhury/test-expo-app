// app/(auth)/register.tsx
import { useAuth } from "@/components/contexts/AuthContext";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const router = useRouter();

  async function onSubmit() {
    setLoading(true);
    // NOTE: replace with real API call
    setTimeout(async () => {
      await signUp({ token: "dummy-token", user: { email } });
      setLoading(false);
    }, 900);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        {/* Decorative elements */}
        <View style={styles.decorativeCircle1} />
        <View style={styles.decorativeCircle2} />

        <View style={styles.formContainer}>
          {/* Back button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>

          <View style={styles.header}>
            {/* <View style={styles.badge}>
              <Text style={styles.badgeText}>✨ Get started</Text>
            </View> */}
            <Text style={styles.h1} onPress={() => router.push("/")}>
              Create account
            </Text>
            <Text style={styles.subtitle}>
              Join us and start building today
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email address</Text>
            <TextInput
              placeholder="your@email.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="Create a strong password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm password</Text>
            <TextInput
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              style={styles.input}
              placeholderTextColor="#999"
            />
          </View>

          {/* Password requirements */}
          <View style={styles.requirementsContainer}>
            <Text style={styles.requirementsTitle}>Password must contain:</Text>
            <View style={styles.requirementItem}>
              <View
                style={[
                  styles.requirementDot,
                  password.length >= 8 && styles.requirementDotActive,
                ]}
              />
              <Text
                style={[
                  styles.requirementText,
                  password.length >= 8 && styles.requirementTextActive,
                ]}
              >
                At least 8 characters
              </Text>
            </View>
            <View style={styles.requirementItem}>
              <View
                style={[
                  styles.requirementDot,
                  /[A-Z]/.test(password) && styles.requirementDotActive,
                ]}
              />
              <Text
                style={[
                  styles.requirementText,
                  /[A-Z]/.test(password) && styles.requirementTextActive,
                ]}
              >
                One uppercase letter
              </Text>
            </View>
            <View style={styles.requirementItem}>
              <View
                style={[
                  styles.requirementDot,
                  /[0-9]/.test(password) && styles.requirementDotActive,
                ]}
              />
              <Text
                style={[
                  styles.requirementText,
                  /[0-9]/.test(password) && styles.requirementTextActive,
                ]}
              >
                One number
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.primaryButton,
              loading && styles.primaryButtonDisabled,
            ]}
            onPress={onSubmit}
            disabled={loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <>
                <Text style={styles.primaryButtonText}>Create account</Text>
                {/* <Text style={styles.arrow}>→</Text> */}
              </>
            )}
          </TouchableOpacity>

          {/* Terms */}
          <Text style={styles.terms}>
            By creating an account, you agree to our{" "}
            <Text style={styles.termsLink}>Terms</Text> and{" "}
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </Text>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => router.push("/(auth)/login")}
              activeOpacity={0.7}
            >
              <Text style={styles.footerLink}>Sign in</Text>
            </TouchableOpacity>
          </View>

          {/* Accent line */}
          <View style={styles.accentLine} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  keyboardView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  decorativeCircle1: {
    position: "absolute",
    top: -60,
    left: -60,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#f0f0f0",
    opacity: 0.5,
  },
  decorativeCircle2: {
    position: "absolute",
    bottom: -100,
    right: -100,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "#f5f5f5",
    opacity: 0.6,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 440,
    width: "100%",
    alignSelf: "center",
    paddingVertical: 40,
  },
  backButton: {
    display: "none",
    position: "absolute",
    top: 20,
    left: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  backArrow: {
    fontSize: 20,
    color: "#111",
    fontWeight: "600",
  },
  header: {
    marginBottom: 28,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#f5f5f5",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
  badgeText: {
    fontSize: 12,
    color: "#444",
    fontWeight: "500",
  },
  h1: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111",
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
  },
  inputContainer: {
    marginBottom: 18,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#111",
    marginBottom: 8,
    letterSpacing: -0.2,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    padding: 14,
    borderRadius: 12,
    fontSize: 15,
    color: "#111",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 1,
  },
  requirementsContainer: {
    backgroundColor: "#f8f8f8",
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  requirementsTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  requirementItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  requirementDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#d0d0d0",
    marginRight: 10,
  },
  requirementDotActive: {
    backgroundColor: "#22c55e",
  },
  requirementText: {
    fontSize: 13,
    color: "#999",
  },
  requirementTextActive: {
    color: "#22c55e",
    fontWeight: "500",
  },
  primaryButton: {
    backgroundColor: "#111",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  primaryButtonDisabled: {
    opacity: 0.7,
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
  terms: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
    marginTop: 20,
    lineHeight: 18,
  },
  termsLink: {
    color: "#111",
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: "#666",
  },
  footerLink: {
    fontSize: 14,
    color: "#111",
    fontWeight: "600",
  },
  accentLine: {
    display: "none",
    position: "absolute",
    bottom: 40,
    right: 0,
    width: 50,
    height: 3,
    backgroundColor: "#111",
    borderRadius: 2,
  },
});
