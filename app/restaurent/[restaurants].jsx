import { useLocalSearchParams } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Platform, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { db } from '../../config/firebaseConfig';



export default function Restaurant() {
    const { restaurants } = useLocalSearchParams();

    const [restaurantData, setRestaurantData] = useState(null);
    const [carouselData, setCarouselData] = useState([]);
    const [slotsData, setSlotsData] = useState([]);




  const getRestaurantData = async () => {
    try {
      const restaurantQuery = query(
        collection(db, "restaurants"),
        where("name", "==", restaurants)
      );
      const restaurantSnapshot = await getDocs(restaurantQuery);

      if (restaurantSnapshot.empty) {
        console.log("No matching restaurant found");
        return;
      }

      for (const doc of restaurantSnapshot.docs) {
        const restaurantData = doc.data();
        setRestaurantData(restaurantData);

        const carouselQuery = query(
          collection(db, "carousel"),
          where("res_id", "==", doc.ref)
        );
        const carouselSnapshot = await getDocs(carouselQuery);
        const carouselImages = [];
        if (carouselSnapshot.empty) {
          console.log("No matching carousel found");
          return;
        }
        carouselSnapshot.forEach((carouselDoc) => {
          carouselImages.push(carouselDoc.data());
        });
        setCarouselData(carouselImages);

        const slotsQuery = query(
          collection(db, "slots"),
          where("ref_id", "==", doc.ref)
        );
        const slotsSnapshot = await getDocs(slotsQuery);
        const slots = [];
        if (carouselSnapshot.empty) {
          console.log("No matching slots found");
          return;
        }
        slotsSnapshot.forEach((slotDoc) => {
          slots.push(slotDoc.data());
        });
        setSlotsData(slots[0]?.slot);
      }
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    getRestaurantData();
  }, []);
  console.log("1",restaurantData);



    return (
        <SafeAreaView style={[{ backgroundColor: "#2b2b2b" },
        Platform.OS === "android" && { paddingBottom: 55 },
        Platform.OS === "ios" && { paddingBottom: 20 }]}>

            <ScrollView className="h-full">
                <View className="flex-1 my-2 p-2">
                    <Text className="text-xl text-[#f49b33] mr-2 font-semibold">
                        {restaurants}</Text>
                    <View className="border-b border-[#f49b33] " />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}