import { View, Text, Image, TouchableOpacity  } from 'react-native'
import React, { useLayoutEffect } from 'react';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeroImage, IconImage, LogoImage } from '../assets';

const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, {});

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/*First Section */}
      <View className="flex-row px-3 mt-8 items-center space-x-2"> 
        <Image source={LogoImage}   className="w-13 h-15 rounded-full items-center justify-center"/>
      
      </View>

      {/*Second Section */}
      <View className="px-6 mt-3 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#229be8] text-[42px] font-bold">Good Moments</Text>
      
        <Text className="text-[#3C6072] text-base"> 
          Experience the world with confidence, knowing that you're 
          protected every step of the way
         </Text> 
       </View> 
      
       {/* Circle Section */} 
       <View className="w-[350px] h-[350px] bg-[#395d74] rounded-full absolute bottom-36 -right-36"></View> 
       <View className="w-[400px] h-[400px] bg-[#d8b989] rounded-full absolute -bottom-28 -left-36"></View> 

        {/* Image container */}
        <View className="flex-1 items-center justify-center">
          <Animatable.Image
            animation="fadeIn"
            easing="ease-in-out"
            source={HeroImage}
            className="w-full h-full object-cover"
          />
          
          <TouchableOpacity
          onPress={() => navigation.navigate ("Discover")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#229be8]
           rounded-full items-center justify-center">
              <Animatable.View 
               animation={"pulse"} 
               easing="ease-in-out"
               iterationCount={"infinite"}
               className="w-20 h-20 items-center justify-center rounded-full bg-[#229be8]">
                <Text className="text-white text-[36px] font-semibold">Go</Text>
              </Animatable.View>
          </TouchableOpacity>
         </View>

   </SafeAreaView>
  );
};

export default HomeScreen