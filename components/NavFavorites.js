import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { Icon } from "@rneui/base";

const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "Code Street, London, UK",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "London Bridge, London, UK",
    },
  ];

const NavFavorites = () => {
    return (
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => {
            <View className="bg-gray-200 h-1">

            </View>
        }}
        renderItem={({ item: {location, destination, icon} }) => (
          <TouchableOpacity className="flex flex-row p-5">
                <View className="mr-4 rounded-full bg-gray-300 p-3">
                    <Icon
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}/>
                </View>
                <View>
                    <Text className="font-semibold text-lg">{location}</Text>
                    <Text className="text-gray-500">{destination}</Text>
                </View>
          </TouchableOpacity>
        )}
      />
    )
}

export default NavFavorites