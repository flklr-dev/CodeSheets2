import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { COLORS } from '../constants/colors';
import CategoryCard from '../components/CategoryCard';
import { Ionicons } from '@expo/vector-icons';
import { pythonData } from '../data/languages/python';
import { javascriptData } from '../data/languages/javascript';

const languages = [
  {
    id: '1',
    name: 'Python',
    icon: require('../assets/languages/python.png'),
    description: 'General-purpose programming language',
    color: '#3776AB',
    categories: pythonData.categories
  },
  {
    id: '2',
    name: 'JavaScript',
    icon: require('../assets/languages/javascript.png'),
    description: 'Programming language of the web',
    color: '#F7DF1E',
    categories: javascriptData.categories
  },
  {
    id: '3',
    name: 'C++',
    icon: require('../assets/languages/cpp.png'),
    description: 'High-performance programming language',
    color: '#00599C'
  },
  {
    id: '4',
    name: 'Java',
    icon: require('../assets/languages/java.png'),
    description: 'Object-oriented programming language',
    color: '#007396'
  },
  {
    id: '5',
    name: 'HTML',
    icon: require('../assets/languages/html.png'),
    description: 'Standard markup language for web pages',
    color: '#E34F26'
  },
  {
    id: '6',
    name: 'CSS',
    icon: require('../assets/languages/css.png'),
    description: 'Style sheet language for web design',
    color: '#264DE4'
  },
];

const HomeScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={COLORS.dark} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search programming languages..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={`${COLORS.dark}80`}
        />
      </View>
      
      <FlatList
        data={filteredLanguages}
        renderItem={({ item }) => (
          <CategoryCard
            category={item}
            onPress={() => navigation.navigate('CategoryList', { language: item })}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    margin: 16,
    marginBottom: 24,
    borderRadius: 12,
    paddingHorizontal: 12,
    elevation: 2,
    shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: COLORS.dark,
  },
  listContainer: {
    padding: 16,
    paddingTop: 0,
  },
});

export default HomeScreen;