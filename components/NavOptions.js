import React from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a Ride",
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350380/assets/2f/29d010-64eb-47ac-b6bb-97503a838259/original/UberX-%281%29.png",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image:
      "https://icons.veryicon.com/png/o/commerce-shopping/supermarket-goods/knife-and-fork-8.png",
    screen: "ExtraScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin)

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => origin && navigation.navigate(item.screen)} className="m-2 pl-6 pb-8 pt-4 bg-gray-200 w-40">
          <View className={!origin && "opacity-20"}>
            <Image
              source={{ uri: item.image }}
              className="w-20 h-20 object-contain"
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;