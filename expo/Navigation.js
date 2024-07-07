import React from "react";
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importing the screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ProductsScreen from "./screens/ProductsScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import StackScreen from "./screens/StackScreen";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen 
        name="Home" 
        component={HomeScreen} 
      />
      <HomeStackNavigator.Screen
        name="Stack"
        component={StackScreen}
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
        tabBarActiveTintColor: "#e91e63", // Active tab color
        tabBarLabelStyle: {
          fontSize: 12, // Change the font size
          fontWeight: "none", // Make the label bold
          paddingBottom: 5, // Add padding to adjust the position
          textDecorationLine: "none",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MyStack}  // Use MyStack instead of HomeScreen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          tabBarLabel: "Products",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="notification" size={24} color="black" />
          ),
          tabBarBadge: 3, // Add the badge to the
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
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
