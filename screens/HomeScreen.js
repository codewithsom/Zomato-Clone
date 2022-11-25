import { View, Text,SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Categories from "../components/Categories";
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            // headerTitle: "TES",
            headerShown:false
        })

    }, [])

  return (
    <SafeAreaView className="bg-white pt-8 pb-32">
            <View className="flex-row pb-3 items-center space-x-2 pl-3">
                <Image source={{uri: 'https://links.papareact.com/wru'}} className='h-7 w-7 bg-gray-300 p-4 rounded-full'/>
                <View>
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location

                    </Text>
                </View>
            </View>

                <View className="mx-3 mb-2">
                    <View className="p-2 rounded-full bg-gray-200">
                        <TextInput placeholder='Restaurants and cuisines......' keyboardType='default'></TextInput>
                    </View>
                </View>

                <ScrollView className="bg-gray-100">
                    <Categories />
                    <FeaturedRow 
                        id="123"
                        title="Featured"
                        description="Paid placements for our partners"
                    />
                     <FeaturedRow 
                        id="123"
                        title="Tasty Discounts"
                        description="Everyone's been enjoying these juicy discounts!"
                    />
                     <FeaturedRow 
                        id="123"
                        title="Offers near you!"
                        description="Why not support your local restaurant tonight!"
                    />
                        <FeaturedRow 
                        id="123"
                        title="Featured"
                        description="Paid placements for our partners"
                    />
                     <FeaturedRow 
                        id="123"
                        title="Tasty Discounts"
                        description="Everyone's been enjoying these juicy discounts!"
                    />
                     <FeaturedRow 
                        id="123"
                        title="Offers near you!"
                        description="Why not support your local restaurant tonight!"
                    />
                </ScrollView>
                
    </SafeAreaView>
  )
}

export default HomeScreen