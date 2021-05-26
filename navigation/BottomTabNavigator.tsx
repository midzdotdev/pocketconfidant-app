/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ChatsScreen from "../screens/ChatsScreen";
import ResourcesScreen from "../screens/ResourcesScreen";
import {
  BottomTabParamList,
  ChatsParamList,
  ResourcesParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Chats"
        component={ChatsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="chatbox-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Resources"
        component={ResourcesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="documents-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ChatsStack = createStackNavigator<ChatsParamList>();

function ChatsNavigator() {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen
        name="ChatsScreen"
        component={ChatsScreen}
        options={{ headerShown: false }}
      />
    </ChatsStack.Navigator>
  );
}

const ResourcesStack = createStackNavigator<ResourcesParamList>();

function ResourcesNavigator() {
  return (
    <ResourcesStack.Navigator>
      <ResourcesStack.Screen
        name="ResourcesScreen"
        component={ResourcesScreen}
        options={{ headerShown: false }}
      />
    </ResourcesStack.Navigator>
  );
}
