import React from 'react';
import { 
  View, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  Text,
  Image,
  Platform 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { Category } from '../types';

const CategoryListScreen = ({ route, navigation }: any) => {
  const { language } = route.params;

  const renderCategory = ({ item }: { item: Category }) => (
    <TouchableOpacity 
      style={[styles.card, { borderLeftColor: language.color }]}
      onPress={() => navigation.navigate('SubcategoryList', { 
        category: item,
        language: language
      })}
      activeOpacity={0.7}
    >
      <View style={[styles.iconContainer, { backgroundColor: `${language.color}15` }]}>
        <Ionicons name={item.icon} size={28} color={language.color} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Ionicons name="layers-outline" size={16} color={language.color} />
            <Text style={[styles.statText, { color: language.color }]}>
              {item.subcategories?.length || 0} subcategories
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={language.icon} style={styles.languageIcon} />
        <View style={styles.headerText}>
          <Text style={styles.languageTitle}>{language.name}</Text>
          <Text style={styles.languageDescription}>{language.description}</Text>
        </View>
      </View>

      <FlatList
        data={language.categories}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: `${COLORS.dark}08`,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.dark,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  headerText: {
    flex: 1,
    marginLeft: 16,
  },
  languageIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
  },
  languageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 4,
  },
  languageDescription: {
    fontSize: 15,
    color: `${COLORS.dark}90`,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginBottom: 16,
    marginHorizontal: 20,
    borderLeftWidth: 4,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.dark,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: `${COLORS.dark}90`,
    marginBottom: 8,
    lineHeight: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${COLORS.dark}08`,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statText: {
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 6,
  },
  list: {
    paddingTop: 16,
    paddingBottom: 32,
  },
});

export default CategoryListScreen;