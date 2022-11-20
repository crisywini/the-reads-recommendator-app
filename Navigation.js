import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Screens

import HomeScreen from "./screens/HomeScreen";
import BookManagementScreen from "./screens/BookManagementScreen";

const Tab = createBottomTabNavigator(); 
const BookManageStackNavigator = createNativeStackNavigator();


function Tabs(){
    return (
        <Tab.Navigator initialRouteName="Home">
        <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />                    
                    ),
                    headerShown: false
            }}    
            />
        <Tab.Screen 
            name="BookManagement"
            component={BookManagementScreen}
            options={{
                    tabBarLabel: 'Bookshelf',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="bookshelf" size={size} color={color} />                    
                    ),
                    headerShown: false
            }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return (
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    );
}



