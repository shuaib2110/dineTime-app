<<<<<<< HEAD
import {
  View,
  Text,
  Image,
  Platform,
  ScrollView,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import logo from "../../assets/images/dinetimelogo.png";
import banner from "../../assets/images/homeBanner.png";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const router = useRouter();
  const [restaurants, setRestaurants] = useState([]);
  const temp = async () => {
    const value = await AsyncStorage.getItem("isGuest");
    const email = await AsyncStorage.getItem("userEmail");
    console.log(value, email);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => router.push(`/restaurant/${item.name}`)}
      className="bg-[#5f5f5f] max-h-64 max-w-xs flex justify-center rounded-lg p-4 mx-4 shadow-md"
    >
      <Image
        resizeMode="cover"
        source={{ uri: item.image }}
        className="h-28 mt-2 mb-1 rounded-lg"
      />
      <Text className="text-white text-lg font-bold mb-2">{item.name}</Text>
      <Text className="text-white text-base mb-2">{item.address}</Text>
      <Text className="text-white text-base mb-2">
        Open: {item.opening} - Close: {item.closing}
      </Text>
    </TouchableOpacity>
  );

  const getRestaurants = async () => {
    const q = query(collection(db, "restaurants"));
    const res = await getDocs(q);

    res.forEach((item) => {
      setRestaurants((prev) => [...prev, item.data()]);
    });
  };
  useEffect(() => {
    getRestaurants();
    temp();
  }, []);

  return (
    <SafeAreaView
      style={[
        { backgroundColor: "#2b2b2b" },
        Platform.OS == "android" && { paddingBottom: 55 },
        Platform.OS == "ios" && { paddingBottom: 20 },
      ]}
    >
=======
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, ImageBackground, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../../assets/images/dinetimelogo.png';
import banner from '../../assets/images/homeBanner.png';
import { db } from '../../config/firebaseConfig';




const Home = () => {
  const router = useRouter();

const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // uploadData();
  },[]);


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>router.push(`/restaurent/${item.name}`)} className="bg-[#5f5f5f] max-h-64 max-w-xs flex justify-center rounded-lg p-4 mx-4 shadow-md">
      <Image
        source={{ uri: item.image }}
        resizeMode="cover"
        className=" h-28 mt-2 mb-1 rounded-lg"
      />
      <Text className="text-lg text-white font-bold mb-2">{item.name}</Text>
      <Text className="text-base text-white font-bold mb-2">{item.address}</Text>
      <Text className="text-white  mb-2"> Open: {item.opening} - Close: {item.closing}</Text>
    </TouchableOpacity>
  )

  const getRestaurants = async () => {
    const q = query(collection(db, "restaurants"));
    const res =await getDocs(q);

    res.forEach((item)=>{
      setRestaurants((prev)=>[...prev, item.data()])
    })
  }


  useEffect(() => {
   getRestaurants();
  }, [])
  
  return (
    <SafeAreaView style={[{ backgroundColor: "#2b2b2b" }, Platform.OS === "android" && {paddingBottom: 55}, Platform.OS === "ios" && {paddingBottom: 20}]}>
>>>>>>> 9074a00d6abca68eaa3b5abee23472a5a9551d73
      <View className="flex items-center">
        <View className="bg-[#5f5f5f] w-11/12 rounded-lg shadow-lg justify-between items-center flex flex-row p-2">
          <View className="flex flex-row">
            <Text
              className={`text-base h-10
<<<<<<< HEAD
                ${Platform.OS == "ios" ? "pt-[8px]" : "pt-1"}
=======
                ${Platform.OS === "ios" ? "pt-[8px]" : "pt-1"}
>>>>>>> 9074a00d6abca68eaa3b5abee23472a5a9551d73
               align-middle text-white`}
            >
              {" "}
              Welcome to{" "}
            </Text>
            <Image resizeMode="cover" className={"w-20 h-12"} source={logo} />
          </View>
        </View>
      </View>
      <ScrollView stickyHeaderIndices={[0]}>
<<<<<<< HEAD
        <ImageBackground
          resizeMode="cover"
          className="mb-4 w-full bg-[#2b2b2b] h-52 items-center justify-center"
          source={banner}
        >
          <BlurView
            intensity={Platform.OS === "android" ? 100 : 25}
            tint="dark"
            className="w-full p-4 shadow-lg"
          >
            <Text className="text-center text-3xl font-bold text-white">
              Dine with your loved ones
            </Text>
          </BlurView>
        </ImageBackground>
        <View className="p-4 bg-[#2b2b2b] flex-row items-center">
          <Text className="text-3xl text-white mr-2 font-semibold">
            Special Discount %
          </Text>
        </View>
        {restaurants.length > 0 ? (
          <FlatList
            data={restaurants}
            renderItem={renderItem}
            horizontal
            contentContainerStyle={{ padding: 16 }}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          />
        ) : (
          <ActivityIndicator animating color={"#fb9b33"} />
        )}
        <View className="p-4 bg-[#2b2b2b] flex-row items-center">
          <Text className="text-3xl text-[#fb9b33] mr-2 font-semibold">
            Our Restaurants
          </Text>
        </View>
        {restaurants.length > 0 ? (
          <FlatList
            data={restaurants}
            renderItem={renderItem}
            horizontal
            contentContainerStyle={{ padding: 16 }}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          />
        ) : (
          <ActivityIndicator animating color={"#fb9b33"} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
=======
        <ImageBackground resizeMode='cover' source={banner} className='mb-4 w-full bg-[#2b2b2b] h-52 items-center justify-center'>
          <BlurView intensity={Platform.OS === "ios" ? 25 : 100} className="w-full p-4 shadow-inherit" tint='dark' >
            <Text className="text-center text-3xl font-bold text-white">Bine with you family</Text>
          </BlurView>
        </ImageBackground>
        <View className="p-4 bg-[#2b2b2b] flex-row items-center ">
          <Text className="text-3xl text-white mr-2 text-semibold ">Special Discount %</Text>
        </View>
        {
          restaurants.length > 0 ? (
            <FlatList
              data={restaurants}
              renderItem={renderItem}
              horizontal
              contentContainerStyle={{ padding: 16 }}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <ActivityIndicator animating={true} color={'#fb9b33'} />
          )
        }
        <View className="p-4 bg-[#2b2b2b] flex-row items-center ">
          <Text className="text-3xl text-[#fb9b33] mr-2 text-semibold ">Our Restaurants</Text>
        </View>
        {
          restaurants.length > 0 ? (
            <FlatList
              data={restaurants}
              renderItem={renderItem}
              horizontal
              contentContainerStyle={{ padding: 16 }}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <ActivityIndicator animating={true} color={'#f49b33'} />
          )
        }


      </ScrollView>

    </SafeAreaView>
  )
}

export default Home;
>>>>>>> 9074a00d6abca68eaa3b5abee23472a5a9551d73
