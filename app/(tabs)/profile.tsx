// app/(tabs)/profile.tsx
import { useAuth } from "@/components/contexts/AuthContext";
import React from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const { signOut, user } = useAuth();

  const profileSections = [
    {
      title: "Account",
      items: [
        { icon: "👤", label: "Personal Info", subtitle: "Update your details" },
        {
          icon: "🔒",
          label: "Privacy & Security",
          subtitle: "Manage your privacy",
        },
        {
          icon: "🔔",
          label: "Notifications",
          subtitle: "Manage notifications",
        },
        { icon: "💳", label: "Billing", subtitle: "Subscription & payments" },
      ],
    },
    {
      title: "Preferences",
      items: [
        { icon: "🎨", label: "Appearance", subtitle: "Theme and display" },
        { icon: "🌐", label: "Language", subtitle: "English" },
        { icon: "📱", label: "Connected Apps", subtitle: "3 apps connected" },
      ],
    },
    {
      title: "Support",
      items: [
        { icon: "❓", label: "Help Center", subtitle: "Get support" },
        { icon: "📄", label: "Terms & Privacy", subtitle: "Legal information" },
        { icon: "ℹ️", label: "About", subtitle: "Version 1.0.0" },
      ],
    },
  ];

  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      { text: "Cancel", style: "cancel" },
      { text: "Sign Out", onPress: signOut, style: "destructive" },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Decorative element */}
        <View style={styles.decorativeCircle} />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarLarge}>
            <Text style={styles.avatarLargeText}>
              {user?.email?.charAt(0).toUpperCase() ?? "U"}
            </Text>
          </View>
          <Text style={styles.userName}>{user?.email}</Text>
          <View style={styles.memberBadge}>
            <View style={styles.memberDot} />
            <Text style={styles.memberText}>Member since today</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>156</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Days Active</Text>
          </View>
        </View>

        {/* Settings Sections */}
        {profileSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.settingsCard}>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={itemIndex}
                  style={[
                    styles.settingItem,
                    itemIndex !== section.items.length - 1 &&
                      styles.settingItemBorder,
                  ]}
                  activeOpacity={0.7}
                >
                  <View style={styles.settingIcon}>
                    <Text style={styles.settingIconText}>{item.icon}</Text>
                  </View>
                  <View style={styles.settingContent}>
                    <Text style={styles.settingLabel}>{item.label}</Text>
                    <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
                  </View>
                  <Text style={styles.settingArrow}>›</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* Sign Out Button */}
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.signOutButton}
            onPress={handleSignOut}
            activeOpacity={0.8}
          >
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>

        {/* App Version */}
        <Text style={styles.versionText}>Minimal App v1.0.0</Text>

        {/* Bottom spacing */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingTop: 24,
  },
  scrollView: {
    flex: 1,
  },
  decorativeCircle: {
    position: "absolute",
    top: -100,
    left: -100,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "#f0f0f0",
    opacity: 0.4,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111",
    letterSpacing: -1,
  },
  profileCard: {
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  avatarLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 3,
  },
  avatarLargeText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
  },
  userName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111",
    marginBottom: 8,
  },
  memberBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  memberDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#22c55e",
    marginRight: 6,
  },
  memberText: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
  },
  statsRow: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 32,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: "#f0f0f0",
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#999",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  settingsCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
    overflow: "hidden",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  settingItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  settingIconText: {
    fontSize: 20,
  },
  settingContent: {
    flex: 1,
  },
  settingLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 13,
    color: "#999",
  },
  settingArrow: {
    fontSize: 24,
    color: "#ccc",
    fontWeight: "300",
  },
  signOutButton: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#fee",
    shadowColor: "#ef4444",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  signOutText: {
    color: "#ef4444",
    fontWeight: "600",
    fontSize: 16,
  },
  versionText: {
    textAlign: "center",
    fontSize: 12,
    color: "#ccc",
    marginTop: 8,
  },
});
