import { View, Text, SafeAreaView, TouchableOpacity, Image, restaurant } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Progress from "react-native-progress";
import MapView, {Marker} from "react-native-maps";

const DeliveryScreen = () => {
    const navigation = useNavigation();

  return (
    <View  className="bg-[#f3bfc6] flex-1 my-8">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text >❌</Text>
            </TouchableOpacity>
            <Text className="font-light text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
            <View className="flex-row justify-between">
                <View>
                    <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                    <Text className="text-2xl font-bold">30-35 Minutes</Text>
                </View>

                <Image source={{uri:"https://links.papareact.com/fls"}} className="h-20 w-20" />
            </View>
            

            <Progress.Bar size={30} color="red" indeterminate={true} />

            <Text className="mt-3 text-gray-500">
                Your order at Rawat Mishthan Bhandar is being prepared
            </Text>

        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
            latitude: 26.922070,
            longitude: 75.778885,
        }}
        className="flex-1 -mt-10 z-0"
        mapType='mutedStandard'>
            
        </MapView>

        <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image source={{uri:"https://links.papareact.com/wru"}} className="h-14 w-14 bg-gray-300 p-4 rounded-full ml-5" />
        
        <View className="flex-1">
            <Text className="text-lg">Hardik Rawat</Text>
            <Text className="text-gray-400">Your Rider</Text>
        </View>

        <Text className="text-[#b40626] text-lg mr-5 font-bold">Call</Text>
        </SafeAreaView>
    
    </View>
  )
}

export default DeliveryScreen