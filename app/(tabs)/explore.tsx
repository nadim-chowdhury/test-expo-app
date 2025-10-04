// app/(tabs)/explore.tsx
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Design", "Development", "Marketing", "Business"];

  const featured = [
    {
      title: "Modern UI Design",
      category: "Design",
      description: "Learn the principles of modern interface design",
      color: "#fef3c7",
      textColor: "#f59e0b",
    },
    {
      title: "React Native Basics",
      category: "Development",
      description: "Build mobile apps with React Native",
      color: "#dbeafe",
      textColor: "#3b82f6",
    },
  ];

  const trending = [
    { icon: "🎨", title: "Design Systems", count: "2.4k", tag: "Popular" },
    { icon: "⚡", title: "Performance Tips", count: "1.8k", tag: "Trending" },
    { icon: "🔒", title: "Security Best Practices", count: "1.2k", tag: "New" },
    { icon: "🚀", title: "Deployment Guide", count: "980", tag: "Hot" },
    { icon: "📱", title: "Mobile First", count: "756", tag: "Rising" },
    { icon: "🎯", title: "UX Patterns", count: "645", tag: "Popular" },
  ];

  const collections = [
    {
      emoji: "📚",
      title: "Getting Started",
      count: "12 resources",
      bgColor: "#f0fdf4",
      iconBg: "#dcfce7",
    },
    {
      emoji: "⚡",
      title: "Advanced Topics",
      count: "8 resources",
      bgColor: "#fef3c7",
      iconBg: "#fde68a",
    },
    {
      emoji: "🎓",
      title: "Tutorials",
      count: "24 resources",
      bgColor: "#ede9fe",
      iconBg: "#ddd6fe",
    },
    {
      emoji: "🔧",
      title: "Tools & Plugins",
      count: "16 resources",
      bgColor: "#fee2e2",
      iconBg: "#fecaca",
    },
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
            <Text style={styles.headerTitle}>Explore</Text>
            <Text style={styles.headerSubtitle}>Discover amazing content</Text>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search resources..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
          />
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryChip,
                selectedCategory === category && styles.categoryChipActive,
              ]}
              onPress={() => setSelectedCategory(category)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.categoryChipText,
                  selectedCategory === category &&
                    styles.categoryChipTextActive,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured</Text>
          {featured.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.featuredCard, { backgroundColor: item.color }]}
              activeOpacity={0.8}
            >
              <View style={styles.featuredTag}>
                <Text
                  style={[styles.featuredTagText, { color: item.textColor }]}
                >
                  {item.category}
                </Text>
              </View>
              <Text style={styles.featuredTitle}>{item.title}</Text>
              <Text style={styles.featuredDescription}>{item.description}</Text>
              <View style={styles.featuredFooter}>
                <Text style={styles.featuredLink}>Learn more →</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Collections */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Collections</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.collectionsGrid}>
            {collections.map((collection, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.collectionCard,
                  { backgroundColor: collection.bgColor },
                ]}
                activeOpacity={0.7}
              >
                <View
                  style={[
                    styles.collectionIcon,
                    { backgroundColor: collection.iconBg },
                  ]}
                >
                  <Text style={styles.collectionEmoji}>{collection.emoji}</Text>
                </View>
                <Text style={styles.collectionTitle}>{collection.title}</Text>
                <Text style={styles.collectionCount}>{collection.count}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Trending */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trending Now</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.trendingContainer}>
            {trending.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.trendingItem}
                activeOpacity={0.7}
              >
                <View style={styles.trendingIcon}>
                  <Text style={styles.trendingEmoji}>{item.icon}</Text>
                </View>
                <View style={styles.trendingContent}>
                  <Text style={styles.trendingTitle}>{item.title}</Text>
                  <Text style={styles.trendingCount}>{item.count} views</Text>
                </View>
                <View style={styles.trendingBadge}>
                  <Text style={styles.trendingBadgeText}>{item.tag}</Text>
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
    paddingTop: 24,
  },
  scrollView: {
    flex: 1,
  },
  decorativeCircle: {
    position: "absolute",
    top: -80,
    right: -80,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "#f0f0f0",
    opacity: 0.4,
  },
  header: {
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 1,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#111",
  },
  categoriesScroll: {
    marginBottom: 28,
  },
  categoriesContent: {
    paddingHorizontal: 20,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    marginRight: 8,
  },
  categoryChipActive: {
    backgroundColor: "#111",
    borderColor: "#111",
  },
  categoryChipText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
  categoryChipTextActive: {
    color: "#fff",
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
  featuredCard: {
    padding: 20,
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
  featuredTag: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 12,
  },
  featuredTagText: {
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 12,
  },
  featuredFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  featuredLink: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },
  collectionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  collectionCard: {
    width: "48%",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
  collectionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  collectionEmoji: {
    fontSize: 24,
  },
  collectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },
  collectionCount: {
    fontSize: 12,
    color: "#666",
  },
  trendingContainer: {
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
  trendingItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  trendingIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  trendingEmoji: {
    fontSize: 20,
  },
  trendingContent: {
    flex: 1,
  },
  trendingTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
    marginBottom: 2,
  },
  trendingCount: {
    fontSize: 12,
    color: "#999",
  },
  trendingBadge: {
    backgroundColor: "#fef3c7",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  trendingBadgeText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#f59e0b",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
});
