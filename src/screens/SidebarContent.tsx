import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const SidebarContent = (props: any) => {
  const APP_VERSION = '1.0.0';

  const menuItems = [
    {
      icon: 'information-circle-outline',
      label: 'About',
      onPress: () => {
        // Add about modal or navigation
      },
    },
    {
      icon: 'share-outline',
      label: 'Share App',
      onPress: () => {
        // Add share functionality
      },
    },
    {
      icon: 'star-outline',
      label: 'Rate App',
      onPress: () => {
        Linking.openURL('market://details?id=your.app.id');
      },
    },
  ];

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>CodeSheets</Text>
        <Text style={styles.tagline}>Quick Reference for Programmers</Text>
      </View>

      <View style={styles.menuItems}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={item.onPress}
          >
            <Ionicons name={item.icon as any} size={24} color={COLORS.dark} />
            <Text style={styles.menuItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.version}>Version {APP_VERSION}</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.accent,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  tagline: {
    fontSize: 14,
    color: COLORS.dark,
    opacity: 0.7,
  },
  menuItems: {
    padding: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuItemText: {
    marginLeft: 15,
    fontSize: 16,
    color: COLORS.dark,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.accent,
    marginTop: 'auto',
  },
  version: {
    fontSize: 12,
    color: COLORS.dark,
    opacity: 0.7,
  },
});

export default SidebarContent;