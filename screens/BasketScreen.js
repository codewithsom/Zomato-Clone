import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native';
import Currency from "react-currency-formatter";

const BasketScreen = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
        <View>
             <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5 mt-1 mb-9">
                <Image source={{uri: "https://links.papareact.com/wru"}} className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
                <Text className="flex-1 ">Deliver in 50-75 min.</Text>
                <TouchableOpacity>
                     <Text className="text-[#00CCBB]">Change</Text>
                </TouchableOpacity>
             </View>
             
             <ScrollView classname="divide-y divide-gray-200">
                <View className="flex-row items-center space-x-3 bg-gray-200 mb-9 px-5 py-2">
                  <Text>2️ x</Text>
                  <Image source={{uri:"https://links.papareact.com/gn7"}} className="h-12 w-12 rounded-full" />
                  <Text className="flex-1">Burger 🍔</Text>
                  <Text className="text-gray-600">
                    <Currency quantity={199} currency="INR" />
                  </Text>
                  <TouchableOpacity>
                    <Text className="text-[#00CCBB] text-xs">Remove</Text>
                  </TouchableOpacity>
                </View>
                <View className="flex-row items-center space-x-3 bg-gray-200 mb-9 px-5 py-2">
                  <Text>2️ x</Text>
                  <Image source={{uri:"https://links.papareact.com/gn7"}} className="h-12 w-12 rounded-full" />
                  <Text className="flex-1">Pizza 🍕</Text>
                  <Text className="text-gray-600">
                    <Currency quantity={299} currency="INR" />
                  </Text>
                  <TouchableOpacity>
                    <Text className="text-[#00CCBB] text-xs">Remove</Text>
                  </TouchableOpacity>
                </View>
                <View className="flex-row items-center space-x-3 bg-gray-200 px-6 py-2">
                  <Text>2 x</Text>
                  <Image source={{uri:"https://links.papareact.com/gn7"}} className="h-12 w-12 rounded-full" />
                  <Text className="flex-1">French Fries 🍟</Text>
                  <Text className="text-gray-600">
                    <Currency quantity={99} currency="INR" />
                  </Text>
                  <TouchableOpacity>
                    <Text className="text-[#00CCBB] text-xs">Remove</Text>
                  </TouchableOpacity>
                </View>
             </ScrollView>

             <View className="p-5 bg-white mt-14 space-y-4">
              <View className="flex-row justify-between">
                <Text className="text-gray-400">Subtotal</Text>
                <Text className="text-gray-400">
                  <Currency quantity={1194} currency="INR" />
                </Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="text-gray-400">Delivery Fee </Text>
                <Text className="text-gray-400">
                  <Currency quantity={25.45} currency="INR" />
                </Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="font-bold">Order Total</Text>
                <Text className="font-bold">
                  <Currency quantity={1219.45} currency="INR" />
                </Text>
              </View>


              <TouchableOpacity onPress={() => navigation.navigate("PreparingOrderScreen")} className="rounded-lg bg-[#00CCBB] p-5 ">
                <Text className="text-center font-bold text-4xl">Place Order</Text>
              </TouchableOpacity>
              
             </View>
        </View>
    </SafeAreaView>
   
  )
}

export default BasketScreen