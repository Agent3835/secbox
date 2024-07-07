import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importing the screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import CartScreen from "./screens/CartScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import ProductsScreen from "./screens/ProductsScreen";
import LoginScreen from "./screens/LoginScreen";  // Asegúrate de que este archivo exista

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerTitle: "Back",
        }}
      />
        <HomeStackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: true,
          headerTitle: "Back",
        }}
      />
    </HomeStackNavigator.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "none",
          paddingBottom: 5,
          textDecorationLine: "none",
        },
      }}
    >
      <Tab.Screen
        name="Home" 
        component={MyStack}
        options={{
          tabBarLabel: "Home Screen",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={24} color="black" />
          ),
          tabBarBadge: 3,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerRight: () => (
          <View style={styles.headerRightContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.headerButton}
            >
              <Text style={styles.headerButtonText}>Log In</Text>
            </TouchableOpacity>
          </View>
        ),
      })}
    >
      <Drawer.Screen 
        name="Home" 
        component={MyTabs} 
        options={{
          headerTitleAlign: 'center',
        }} 
      />
      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen} 
      />
      {/* <Drawer.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }}  // Ocultar el header en la pantalla de Login
      /> */}
      {/* Add more screens to the drawer as needed */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10, // Adjust as needed
  },
  headerButton: {
    padding: 10,
    backgroundColor: '#478CCF', // Adjust as needed
    borderRadius: 10,
  },
  headerButtonText: {
    color: '#fff', // Adjust as needed
  },
});

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
