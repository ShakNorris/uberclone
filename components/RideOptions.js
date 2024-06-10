import { Text, View } from "react-native";
import React, { Component, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInfo } from "../slices/navSlice";

const data = [
  {
    id: "uber-x",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "uber-XL",
    title: "UberXL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "uber-luxx",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const CHARGE_RATE = 1.5;

const RideOptions = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null)
  const travelTimeInfo = useSelector(selectTravelTimeInfo)

  return (
    <SafeAreaView className="bg-white flex-grow">
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate(`NavigateCard`)}
          className="absolute top-3 left-5 p-3 rounded-full"
        >
          <Icon name="chevron-left" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">Select a Ride - {travelTimeInfo?.distance?.text}</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <TouchableOpacity onPress={() => setSelected(item)}
          className={`flex-row items-center justify-between px-10 ${id === selected?.id && bg-gray-200}`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View className="-ml-6">
              <Text className="text-xl font-semibold">{title}</Text>
              <Text>Travel Time...</Text>
            </View>
            <Text className="text-xl">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
              }).format(
                (travelTimeInfo?.duration?.value * CHARGE_RATE * multiplier) / 100
              )}

            </Text>
          </TouchableOpacity>
        )}
      />
      <View className="mt-auto border-t border-gray-200">
        <TouchableOpacity className="bg-black py-3 m-3">
            <Text className="text-center text-white text-xl">Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptions;
