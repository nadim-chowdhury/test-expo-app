// app/(tabs)/home.tsx
import { useAuth } from "@/components/contexts/AuthContext";
import React from "react";
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  const { user } = useAuth();

  const stats = [
    { label: "Projects", value: "12", change: "+3" },
    { label: "Tasks", value: "48", change: "+12" },
    { label: "Completed", value: "156", change: "+24" },
  ];

  const quickActions = [
    { icon: "✏️", title: "New Project", subtitle: "Start something new" },
    { icon: "📊", title: "Analytics", subtitle: "View insights" },
    { icon: "⚙️", title: "Settings", subtitle: "Manage preferences" },
    { icon: "👥", title: "Team", subtitle: "Invite members" },
  ];

  const recentActivity = [
    { title: "Website Redesign", time: "2 hours ago", status: "in-progress" },
    { title: "Mobile App Update", time: "5 hours ago", status: "completed" },
    { title: "Marketing Campaign", time: "Yesterday", status: "in-progress" },
  ];

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
          <View>
            <Text style={styles.greeting}>Welcome back 👋</Text>
            <Text style={styles.email}>{user?.email ?? "friend"}</Text>
          </View>
          <TouchableOpacity style={styles.avatarButton}>
            <Text style={styles.avatarText}>
              {user?.email?.charAt(0).toUpperCase() ?? "U"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
              <View style={styles.statChange}>
                <Text style={styles.statChangeText}>{stat.change}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            {quickActions.map((action, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.actionCard}
                activeOpacity={0.7}
              >
                <Text style={styles.actionIcon}>{action.icon}</Text>
                <Text style={styles.actionTitle}>{action.title}</Text>
                <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.activityContainer}>
            {recentActivity.map((activity, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.activityItem}
                activeOpacity={0.7}
              >
                <View style={styles.activityDot} />
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>{activity.title}</Text>
                  <Text style={styles.activityTime}>{activity.time}</Text>
                </View>
                <View style={[
                  styles.activityStatus,
                  activity.status === "completed" && styles.activityStatusCompleted
                ]}>
                  <Text style={[
                    styles.activityStatusText,
                    activity.status === "completed" && styles.activityStatusTextCompleted
                  ]}>
                    {activity.status === "completed" ? "Done" : "Active"}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

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
  },
  scrollView: {
    flex: 1,
  },
  decorativeCircle: {
    position: "absolute",
    top: -120,
    right: -120,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "#f0f0f0",
    opacity: 0.4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
    letterSpacing: -1,
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
  avatarButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  avatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  statsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
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
    marginBottom: 8,
  },
  statChange: {
    alignSelf: "flex-start",
    backgroundColor: "#f0fdf4",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  statChangeText: {
    fontSize: 11,
    color: "#22c55e",
    fontWeight: "600",
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    letterSpacing: -0.5,
  },
  seeAllText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  actionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  actionCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  actionIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  actionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 12,
    color: "#666",
  },
  activityContainer: {
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
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  activityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#111",
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 12,
    color: "#999",
  },
  activityStatus: {
    backgroundColor: "#fef3c7",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  activityStatusCompleted: {
    backgroundColor: "#f0fdf4",
  },
  activityStatusText: {
    fontSize: 11,
    color: "#f59e0b",
    fontWeight: "600",
  },
  activityStatusTextCompleted: {
    color: "#22c55e",
  },
});