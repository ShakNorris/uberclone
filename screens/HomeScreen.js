import React from 'react'
import { Text, View, SafeAreaView, Image } from 'react-native'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_KEY } from "@env"
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import NavFavorites from '../components/NavFavorites'

const HomeScreen = () => {
  const dispatch = useDispatch();

  return(
    <SafeAreaView>
        <View className="p-5">
          <View className="flex-row items-center ml-1">
            <Image source={{uri: "https://www.freeiconspng.com/thumbs/car-icon-png/car-icon-png-25.png"}} className="w-10 h-10 object-scale-down" />
            <Text className="ml-2 font-bold text-lg">Uber Clone</Text>
          </View>

          <GooglePlacesAutocomplete
          styles={{
            container:{
              flex:0,
            },
            textInput: {
              fontSize:10,
            },
          }}
          query={{
            key: GOOGLE_MAPS_KEY,
            language: 'en'
          }}
          onPress={(data, details=null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))

            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          minLength={2}
          enablePoweredByContainer={false}
          placeholder='Where From?'
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          />

          <NavOptions />
          <NavFavorites />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen