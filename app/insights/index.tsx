// app/(tabs)/insights.tsx
import React, { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function InsightsScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState("Week");

  const periods = ["Day", "Week", "Month", "Year"];

  const metrics = [
    {
      label: "Revenue",
      value: "$12,450",
      change: "+12.5%",
      positive: true,
      icon: "💰",
    },
    {
      label: "Users",
      value: "8,234",
      change: "+8.2%",
      positive: true,
      icon: "👥",
    },
    {
      label: "Conversion",
      value: "3.4%",
      change: "-2.1%",
      positive: false,
      icon: "📊",
    },
  ];

  const chartData = [
    { day: "Mon", value: 65, label: "65" },
    { day: "Tue", value: 82, label: "82" },
    { day: "Wed", value: 73, label: "73" },
    { day: "Thu", value: 95, label: "95" },
    { day: "Fri", value: 88, label: "88" },
    { day: "Sat", value: 70, label: "70" },
    { day: "Sun", value: 76, label: "76" },
  ];

  const maxValue = Math.max(...chartData.map((d) => d.value));

  const activities = [
    {
      time: "10:30 AM",
      action: "New user signup",
      user: "john@email.com",
      color: "#22c55e",
    },
    {
      time: "09:15 AM",
      action: "Payment received",
      user: "$299.00",
      color: "#3b82f6",
    },
    {
      time: "08:45 AM",
      action: "Project completed",
      user: "Website Redesign",
      color: "#8b5cf6",
    },
    {
      time: "Yesterday",
      action: "New subscription",
      user: "Pro Plan",
      color: "#f59e0b",
    },
  ];

  const topPerformers = [
    { name: "Design System", score: 98, trend: "up" },
    { name: "Landing Pages", score: 94, trend: "up" },
    { name: "Mobile App", score: 87, trend: "down" },
    { name: "API Integration", score: 82, trend: "up" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Decorative elements */}
        <View style={styles.decorativeCircle1} />
        <View style={styles.decorativeCircle2} />

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Insights</Text>
            <Text style={styles.headerSubtitle}>Track your performance</Text>
          </View>
          <TouchableOpacity style={styles.exportButton} activeOpacity={0.7}>
            <Text style={styles.exportIcon}>📥</Text>
          </TouchableOpacity>
        </View>

        {/* Period Selector */}
        <View style={styles.periodContainer}>
          {periods.map((period, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.periodButton,
                selectedPeriod === period && styles.periodButtonActive,
              ]}
              onPress={() => setSelectedPeriod(period)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.periodText,
                  selectedPeriod === period && styles.periodTextActive,
                ]}
              >
                {period}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Metrics Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.metricsScroll}
          contentContainerStyle={styles.metricsContent}
        >
          {metrics.map((metric, index) => (
            <View key={index} style={styles.metricCard}>
              <View style={styles.metricHeader}>
                <Text style={styles.metricIcon}>{metric.icon}</Text>
                <View
                  style={[
                    styles.metricChange,
                    metric.positive
                      ? styles.metricChangePositive
                      : styles.metricChangeNegative,
                  ]}
                >
                  <Text
                    style={[
                      styles.metricChangeText,
                      metric.positive
                        ? styles.metricChangeTextPositive
                        : styles.metricChangeTextNegative,
                    ]}
                  >
                    {metric.change}
                  </Text>
                </View>
              </View>
              <Text style={styles.metricValue}>{metric.value}</Text>
              <Text style={styles.metricLabel}>{metric.label}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Chart */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Activity Overview</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.chartLegend}>● Last 7 days</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.chartCard}>
            <View style={styles.chart}>
              {chartData.map((item, index) => (
                <View key={index} style={styles.chartColumn}>
                  <View style={styles.chartBarContainer}>
                    <View
                      style={[
                        styles.chartBar,
                        { height: `${(item.value / maxValue) * 100}%` },
                      ]}
                    />
                  </View>
                  <Text style={styles.chartLabel}>{item.day}</Text>
                </View>
              ))}
            </View>
            <View style={styles.chartFooter}>
              <Text style={styles.chartFooterText}>Peak: Thursday (95)</Text>
            </View>
          </View>
        </View>

        {/* Top Performers */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Performers</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.performersCard}>
            {topPerformers.map((performer, index) => (
              <View
                key={index}
                style={[
                  styles.performerItem,
                  index !== topPerformers.length - 1 &&
                    styles.performerItemBorder,
                ]}
              >
                <View style={styles.performerRank}>
                  <Text style={styles.performerRankText}>{index + 1}</Text>
                </View>
                <View style={styles.performerContent}>
                  <Text style={styles.performerName}>{performer.name}</Text>
                  <View style={styles.performerBar}>
                    <View
                      style={[
                        styles.performerBarFill,
                        { width: `${performer.score}%` },
                      ]}
                    />
                  </View>
                </View>
                <View style={styles.performerScore}>
                  <Text style={styles.performerScoreText}>
                    {performer.score}
                  </Text>
                  <Text style={styles.performerTrend}>
                    {performer.trend === "up" ? "↗" : "↘"}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityCard}>
            {activities.map((activity, index) => (
              <View
                key={index}
                style={[
                  styles.activityItem,
                  index !== activities.length - 1 && styles.activityItemBorder,
                ]}
              >
                <View
                  style={[
                    styles.activityDot,
                    { backgroundColor: activity.color },
                  ]}
                />
                <View style={styles.activityContent}>
                  <Text style={styles.activityAction}>{activity.action}</Text>
                  <Text style={styles.activityUser}>{activity.user}</Text>
                </View>
                <Text style={styles.activityTime}>{activity.time}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Summary Card */}
        <View style={styles.section}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryIcon}>✨</Text>
            <Text style={styles.summaryTitle}>Great Progress!</Text>
            <Text style={styles.summaryText}>
              You&apos;re performing 23% better than last week. Keep up the
              excellent work!
            </Text>
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
  decorativeCircle1: {
    position: "absolute",
    top: -100,
    right: -100,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "#f0f0f0",
    opacity: 0.4,
  },
  decorativeCircle2: {
    position: "absolute",
    bottom: 100,
    left: -80,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#f5f5f5",
    opacity: 0.3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111",
    letterSpacing: -1,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 15,
    color: "#666",
  },
  exportButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  exportIcon: {
    fontSize: 20,
  },
  periodContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 8,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
  periodButtonActive: {
    backgroundColor: "#111",
    borderColor: "#111",
  },
  periodText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
  periodTextActive: {
    color: "#fff",
  },
  metricsScroll: {
    marginBottom: 32,
  },
  metricsContent: {
    paddingHorizontal: 20,
    gap: 12,
  },
  metricCard: {
    width: width * 0.42,
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    marginRight: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  metricHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  metricIcon: {
    fontSize: 24,
  },
  metricChange: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  metricChangePositive: {
    backgroundColor: "#f0fdf4",
  },
  metricChangeNegative: {
    backgroundColor: "#fef2f2",
  },
  metricChangeText: {
    fontSize: 11,
    fontWeight: "600",
  },
  metricChangeTextPositive: {
    color: "#22c55e",
  },
  metricChangeTextNegative: {
    color: "#ef4444",
  },
  metricValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 13,
    color: "#666",
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
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    letterSpacing: -0.5,
  },
  seeAllText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  chartLegend: {
    fontSize: 12,
    color: "#666",
  },
  chartCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  chart: {
    flexDirection: "row",
    height: 160,
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  chartColumn: {
    flex: 1,
    alignItems: "center",
  },
  chartBarContainer: {
    width: "80%",
    height: 140,
    justifyContent: "flex-end",
    marginBottom: 8,
  },
  chartBar: {
    width: "100%",
    backgroundColor: "#111",
    borderRadius: 6,
    minHeight: 8,
  },
  chartLabel: {
    fontSize: 11,
    color: "#999",
    fontWeight: "500",
  },
  chartFooter: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#f5f5f5",
  },
  chartFooterText: {
    fontSize: 13,
    color: "#666",
  },
  performersCard: {
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
  performerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  performerItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  performerRank: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  performerRankText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#666",
  },
  performerContent: {
    flex: 1,
  },
  performerName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
    marginBottom: 6,
  },
  performerBar: {
    height: 6,
    backgroundColor: "#f5f5f5",
    borderRadius: 3,
    overflow: "hidden",
  },
  performerBarFill: {
    height: "100%",
    backgroundColor: "#111",
    borderRadius: 3,
  },
  performerScore: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  performerScoreText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
  performerTrend: {
    fontSize: 14,
    color: "#22c55e",
  },
  activityCard: {
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
  },
  activityItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  activityDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityAction: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
    marginBottom: 2,
  },
  activityUser: {
    fontSize: 12,
    color: "#999",
  },
  activityTime: {
    fontSize: 12,
    color: "#999",
  },
  summaryCard: {
    backgroundColor: "#fef3c7",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fde68a",
  },
  summaryIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },
});
