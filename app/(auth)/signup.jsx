import { useRouter } from "expo-router";
import { Formik } from "formik";
import { Button, Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
const entryImg = require("../../assets/images/Frame.png");

const Signup = () => {

    const router = useRouter();
    const handleSignup = () =>{

    }

    return (
        <SafeAreaView className={`bg-[#2b2b2b]`}>
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="m-2 flex justify-center items-center">
                    <Image source={logo} style={{ width: 300, height: 300 }} />
                    <Text className="text-lg text-center text-white font-bold mb-10">
                        Let' get you started
                    </Text>
                    <View className="w-5/6">
                    <Formik initialValues={{email:"", password:""} } validationSchema={""} onSubmit={handleSignup} >
  {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
       <View className="w-full">
        <Text>Email</Text>
         <TextInput
         keyboardType="email-address"
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
         <Button onPress={handleSubmit} title="Submit" />
       </View>
     )}
                    </Formik>
                    </View>

                </View>
                <View className="flex-1">
                    <Image source={entryImg} className="w-full h-full " resizeMode="contain" />
                </View>
                <TouchableOpacity onPress={() => router.push('/signup')}
                    className="p-2 my-2 bg-[#f49b33] text-black rounded-lg">
                    <Text className="text-lg font-semibold text-center">Sign Up</Text>
                </TouchableOpacity>
                <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default Signup