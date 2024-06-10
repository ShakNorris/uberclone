import { Text, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "./Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "./NavigateCard";
import RideOptions from "./RideOptions";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}
      className="absolute bg-gray-100 top-16 left-8 p-3 rounded-full shadow-lg z-50">
        <Icon name="menu" />
      </TouchableOpacity>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptions"
            component={RideOptions}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
