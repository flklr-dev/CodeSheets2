import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { COLORS } from '../constants/colors';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onPress: () => void;
}

const CategoryCard = ({ category, onPress }: CategoryCardProps) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.card, { borderLeftColor: category.color }]}
    >
      <View style={[styles.iconContainer, { backgroundColor: `${category.color}10` }]}>
        <Image source={category.icon} style={styles.icon} resizeMode="contain" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{category.name}</Text>
        <Text style={styles.description}>{category.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderLeftWidth: 4,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    width: 40,
    height: 40,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: `${COLORS.dark}99`,
  },
});

export default CategoryCard;