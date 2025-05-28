import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (

    <View
      className="bg-blue-600 "
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-slate-50 text-4xl m-20 "  >HELLO WORLD</Text>
      <TouchableOpacity onPress={() => router.push("/home")}>
        <Text className="bg-slate-200 text-xl">MOVE TO TESTING</Text>
      </TouchableOpacity>
    </View>
  );
}
