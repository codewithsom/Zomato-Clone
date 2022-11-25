import { SafeAreaView, Text } from 'react-native'
import React, {useEffect} from 'react'
import * as Animatable from "react-native-animatable";
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import restaurantSlice from '../features/restaurantSlice';


const PreparingOrderScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery");
        }, 4000);

    }, []);
  return (
    <SafeAreaView className="bg-[#eb96a0] flex-1 justify-center items-center">
        <Animatable.Image
            source={require("../assets/GC5.gif")}
            animation="slideInUp"
            iterationCount={1}
            className="h-70 w-70"
        />

        <Animatable.Text
            animation="slideInLeft"
            iterationCount={1}
            className="text-xm my-12 font-bold text-center"
        >Waiting for Restaurant to accept your order!</Animatable.Text>

        <Progress.Bar progress={0.2} color="white" width={300} indeterminate={true} />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen