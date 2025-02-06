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
import { Subcategory } from '../types';

const SubcategoryListScreen = ({ route, navigation }: any) => {
  const { category, language } = route.params;

  const renderSubcategory = ({ item }: { item: Subcategory }) => (
    <TouchableOpacity 
      style={[styles.card, { borderLeftColor: language.color }]}
      onPress={() => navigation.navigate('Detail', { 
        subcategory: item,
        category,
        language,
        currentExampleIndex: 0
      })}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.statsContainer}>
          <View style={[styles.stat, { backgroundColor: `${language.color}15` }]}>
            <Text style={[styles.statText, { color: language.color }]}>
              {item.examples?.length || 0} examples
            </Text>
          </View>
        </View>
      </View>
      <Ionicons 
        name="chevron-forward" 
        size={20} 
        color={`${COLORS.dark}40`}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image source={language.icon} style={styles.languageIcon} />
          <View style={styles.headerText}>
            <Text style={styles.languageTitle}>{category.title}</Text>
            <Text style={styles.languageDescription}>{category.description}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={category.subcategories}
        renderItem={renderSubcategory}
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
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
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
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 4,
  },
  languageDescription: {
    fontSize: 15,
    color: `${COLORS.dark}90`,
    lineHeight: 20,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: 12,
    marginHorizontal: 20,
    borderLeftWidth: 3,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        shadowColor: COLORS.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.dark,
    marginBottom: 6,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statText: {
    fontSize: 13,
    fontWeight: '500',
  },
  list: {
    paddingTop: 16,
    paddingBottom: 32,
  },
});

export default SubcategoryListScreen;