import React, { useState, useEffect } from 'react';
import { 
  View, 
  StyleSheet, 
  SectionList, 
  Text, 
  TouchableOpacity,
  TextInput
} from 'react-native';
import { COLORS } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { pythonSyntax } from '../data/pythonSyntax';

// Import the static data based on category
const getSyntaxData = (categoryId: string) => {
  switch(categoryId) {
    case '1': // Python
      return pythonSyntax;
    // Add other cases for different languages
    default:
      return [];
  }
};

const SyntaxListScreen = ({ route }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const category = route.params.category;
  const [syntaxData, setSyntaxData] = useState(getSyntaxData(category.id));

  const filteredSyntax = syntaxData.map(section => ({
    title: section.title,
    data: section.items.filter(item => 
      item.syntax.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.data.length > 0);

  const renderSyntaxItem = ({ item }: any) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.syntax}>{item.syntax}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.exampleContainer}>
        <Text style={styles.exampleLabel}>Example:</Text>
        <Text style={styles.example}>{item.example}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={COLORS.dark} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search syntax..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={`${COLORS.dark}80`}
        />
      </View>

      <SectionList
        sections={filteredSyntax}
        renderItem={renderSyntaxItem}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item.id + index}
        contentContainerStyle={styles.listContainer}
        stickySectionHeadersEnabled={true}
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
    marginBottom: 8,
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
  },
  sectionHeader: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  syntax: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 8,
    fontFamily: 'monospace',
  },
  description: {
    fontSize: 14,
    color: COLORS.dark,
    opacity: 0.8,
    marginBottom: 12,
  },
  exampleContainer: {
    backgroundColor: `${COLORS.dark}08`,
    padding: 12,
    borderRadius: 8,
  },
  exampleLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 4,
  },
  example: {
    fontSize: 14,
    color: COLORS.dark,
    fontFamily: 'monospace',
  },
});

export default SyntaxListScreen;