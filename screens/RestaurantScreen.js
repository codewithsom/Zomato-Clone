import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
  const {
    params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,

    },
  } = useRoute();

  useEffect(() => {
    dispatch(setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,


    })
    
    );
    
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    });


  }, []);


  return (
    <>
        <BasketIcon />
        <ScrollView>
        <View className='relative'>
            <Image
                source={{
                    uri: imgUrl,
                }}
                className='w-full h-56 bg-gray-300 p-4'
            
            />
            <TouchableOpacity 
            onPress={navigation.goBack}
            
            className="absolute top-12 left-3 p-4 bg-gray-100 w-6 rounded-full">
            </TouchableOpacity>
        </View>

        <View className='bg-white'>
            <View className='px-4 pt-4'>
                <Text className="text-3xl font-bold">{title}</Text>
                <View className="flex-row space-x-2 my-1">
                    <View className='flex-row items-center space-x-1'>
                        <Text className="text-xs text-gray-500">
                            <Text className="text-green-500">{rating}</Text> . {genre}
                        </Text>
                    </View>

                    <View className='flex-row items-center space-x-1'>
                            <Text className="text-xs text-gray-500">Nearby . {address}</Text>
                    </View>
                </View>

                <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
            </View>

            <TouchableOpacity className="py-4 flex-row border-y border-gray-300">
                <Text className="pl-4 flex-1 text-md font-bold">
                    Have a food allergy 😋 ?
                </Text>
            </TouchableOpacity>
        </View>

        <View className="pb-36">
            <Text className="px-4 pt-4 mb-3 font-bold text-xl">Menu</Text>

            {/* {dishes.map((dish) => (
                <DishRow 
                    key={dish._id}
                    id={dish._id}
                    name={dish.name}
                    description={dish.short_description}
                    price={dish.price}
                    image={dish.image}
                
                />
            ))} */}
            <DishRow 
                    key={1}
                    id={1}
                    name="Garlic Bread"
                    description="This is a test description."
                    price={120}
                    image={'https://links.papareact.com/wru'}
                
                />
                <DishRow 
                    key={12}
                    id={145}
                    name="Omlette"
                    description="This is a test description."
                    price={120}
                    image={'https://links.papareact.com/wru'}
                
                />
                <DishRow 
                    key={341}
                    id={1999}
                    name="Burger"
                    description="This is a test description."
                    price={1220}
                    image={'https://links.papareact.com/wru'}
                
                />
                <DishRow 
                    key={111}
                    id={199}
                    name="Pizza"
                    description="This is a test description."
                    price={1201}
                    image={'https://links.papareact.com/wru'}
                
                />
                <DishRow 
                    key={11}
                    id={175}
                    name="Chicken"
                    description="This is a test description."
                    price={1209}
                    image={'https://links.papareact.com/wru'}
                
                />
                <DishRow 
                    key={15}
                    id={123}
                    name="French Fries"
                    description="This is a test description."
                    price={120}
                    image={'https://links.papareact.com/wru'}
                
                />

                <DishRow 
                    key={125}
                    id={1223}
                    name="Chicken Nuggets"
                    description="This is a test description."
                    price={120}
                    image={'https://links.papareact.com/wru'}
                
                />
                
        </View>
        </ScrollView>
    </>
  );
};

export default RestaurantScreen;