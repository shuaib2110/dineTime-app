import { useRouter } from "expo-router";
<<<<<<< HEAD
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/dinetimelogo.png";
const entryImg = require("../assets/images/Frame.png");
import AsyncStorage from "@react-native-async-storage/async-storage";
// const logo = require("../assets/images/dinetimelogo.png");
export default function Index() {
  const router = useRouter();

  const handleGuest = async () => {
    await AsyncStorage.setItem("isGuest", "true");
    router.push("/home");
  };

  return (
    <SafeAreaView className={`bg-[#2b2b2b]`}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: 300, height: 300 }} />
          <View className="w-3/4">
            <TouchableOpacity
              onPress={() => router.push("/signup")}
              className="p-2 my-2 bg-[#f49b33]  text-black rounded-lg "
            >
              <Text className="text-lg font-semibold text-center">Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleGuest}
              className="p-2 my-2 bg-[#2b2b2b] border border-[#f49b33] rounded-lg max-w-fit "
            >
              <Text className="text-lg font-semibold text-[#f49b33] text-center">
                Guest User
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-center text-base  font-semibold my-4 text-white">
              <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" /> or{" "}
              <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />
            </Text>

            <TouchableOpacity
              className="flex flex-row justify-center items-center"
              onPress={() => router.push("/signin")}
            >
              <Text className="text-white font-semibold">Already a User? </Text>
              <Text className="text-base font-semibold underline text-[#f49b33]">
                Sign in
              </Text>
=======
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/dinetimelogo.png";
const entryImg = require("../assets/images/Frame.png");

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className={`bg-[#2b2b2b]`}>
      <StatusBar backgroundColor={"#2b2b2b"} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: 300, height: 300 }} />
          <View className="w-3/4 ">
            <TouchableOpacity onPress={() => router.push('/signup')}
              className="p-2 my-2 bg-[#f49b33] text-black rounded-lg">
              <Text className="text-lg font-semibold text-center">Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/home')}
              className="p-2 my-2  border border-[#f49b33]  rounded-lg max-w-fit">
              <Text className="text-lg font-semibold text-center text-[#f49b33]">Guest User</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-center text-lg font-semibold my-4 text-white">
              <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />{" "}or{" "} 
              <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />
            </Text>
            <TouchableOpacity className="flex flex-row justify-center items-center" onPress={()=>router.push("/signin")} >
              <Text className="text-white font-semibold">Already a user? {" "}</Text>
              <Text className="text-base font-semibold underline text-[#f49b33]">Sign in</Text>
>>>>>>> 9074a00d6abca68eaa3b5abee23472a5a9551d73
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-1">
<<<<<<< HEAD
          <Image
            source={entryImg}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>
        <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
=======
          <Image source={entryImg} className="w-full h-full " resizeMode="contain" />
        </View>

>>>>>>> 9074a00d6abca68eaa3b5abee23472a5a9551d73
      </ScrollView>
    </SafeAreaView>
  );
}
