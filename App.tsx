import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import CategoryListScreen from './src/screens/CategoryListScreen';
import SubcategoryListScreen from './src/screens/SubcategoryListScreen';
import DetailScreen from './src/screens/DetailScreen';
import SidebarContent from './src/screens/SidebarContent';
import { COLORS } from './src/constants/colors';

const Stack = createSharedElementStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.primary,
      },
      headerTintColor: COLORS.dark,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen 
      name="Home" 
      component={HomeScreen}
      options={{ title: 'CodeSheets' }}
    />
    <Stack.Screen 
      name="CategoryList" 
      component={CategoryListScreen}
      options={({ route }: any) => ({ 
        title: route.params?.language?.name || 'Categories'
      })}
    />
    <Stack.Screen 
      name="SubcategoryList" 
      component={SubcategoryListScreen}
      options={({ route }: any) => ({ 
        title: route.params?.category?.title || 'Subcategories'
      })}
    />
    <Stack.Screen 
      name="Detail" 
      component={DetailScreen}
      options={({ route }: any) => ({ 
        title: route.params?.subcategory?.title || 'Detail'
      })}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Drawer.Navigator
        drawerContent={(props) => <SidebarContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: COLORS.background,
          },
        }}
      >
        <Drawer.Screen 
          name="MainStack" 
          component={MainStack}
          options={{ title: 'CodeSheets' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}