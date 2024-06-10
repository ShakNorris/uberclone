import React from 'react'
import { Text, View, SafeAreaView, Image } from 'react-native'
import NavOptions from '../components/NavOptions'


const HomeScreen = () => {
  return(
    <SafeAreaView>
        <View className="p-5">
          <View className="flex-row items-center ml-1">
            <Image source={{uri: "https://www.freeiconspng.com/thumbs/car-icon-png/car-icon-png-25.png"}} className="w-10 h-10 object-scale-down" />
            <Text className="ml-2 font-bold text-lg">Uber Clone</Text>
          </View>
          <NavOptions />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen