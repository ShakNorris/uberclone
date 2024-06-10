import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_KEY } from "@env"
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import RideOptions from './RideOptions'
import NavFavorites from './NavFavorites'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from '@rneui/base'

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
      <SafeAreaView className="bg-white flex-1">
        <View className="mt-[-65px] flex-shrink">
            <View>
                <GooglePlacesAutocomplete
                placeholder='Where to?' 
                debounce={400}
                styles={toInputBoxStyles}
                fetchDetails={true}
                enablePoweredByContainer={false}
                query={{
                    key:GOOGLE_MAPS_KEY,
                    language: "en",
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                onPress={(data, details = null) => {
                    dispatch(setDestination({
                        location: details.geometry.location,
                        description: data.description,
                    }))

                    navigation.navigate('RideOptions');
                }}/>
            </View>
            <NavFavorites />
        </View>

        <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
            <TouchableOpacity onPress={() => navigation.navigate("RideOptions")}
             className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full">
                <Icon name="car" type="font-awesome" color='white' size={16} />
                <Text className="text-white text-center">Rides</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("RideOptions")}
             className="flex flex-row justify-between w-24 px-4 py-3 rounded-full">
                <Icon name="fast-food-outline" type="ionicon" color='black' size={16} />
                <Text className="text-center">Eats</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
}

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
});