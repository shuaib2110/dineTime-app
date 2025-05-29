import { useRouter } from "expo-router";
import { Formik } from "formik";
import {
    Image,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
import validationSchema from "../../utils/authSchema";
const entryImg = require("../../assets/images/Frame.png");

const Signin = () => {
    const router = useRouter();
    const handleSignin = () => { };

    return (
        <SafeAreaView className={`bg-[#2b2b2b]`}>
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="m-2 flex justify-center items-center">
                    <Image source={logo} style={{ width: 230, height: 100 }} />
                    <Text className="text-lg text-center text-white font-bold mb-10">
                        Let&apos;s get you started
                    </Text>
                    <View className="w-5/6">
                        <Formik
                            initialValues={{ email: "", password: "" }}
                            validationSchema={validationSchema}
                            onSubmit={handleSignin}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                errors,
                                touched,
                            }) => (
                                <View className="w-full">
                                    <Text className="text-[#f49b23] mt-4 mb-2">Email</Text>
                                    <TextInput
                                        className="h-10 border border-white text-white rounded px-2"
                                        keyboardType="email-address"
                                        onChangeText={handleChange("email")}
                                        onBlur={handleBlur("email")}
                                        value={values.email}
                                    />
                                    {touched.email && errors.email && (
                                        <Text className="text-red-500 text-xs mb-2">
                                            {errors.email}
                                        </Text>
                                    )}
                                    <Text className="text-[#f49b23] mt-4 mb-2">Password</Text>
                                    <TextInput
                                        className="h-10 border border-white text-white rounded px-2"
                                        secureTextEntry
                                        onChangeText={handleChange("password")}
                                        onBlur={handleBlur("password")}
                                        value={values.password}
                                    />
                                    {touched.password && errors.password && (
                                        <Text className="text-red-500 text-xs mb-2">
                                            {errors.password}
                                        </Text>
                                    )}
                                    <TouchableOpacity
                                        onPress={handleSubmit}
                                        className="p-2 my-2 bg-[#f49b33] text-black rounded-lg mt-10"
                                    >
                                        <Text className="text-lg font-semibold text-center">
                                            Sign in
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Formik>
                        <View className="flex justify-center items-center mt-5 p-2">
                            <TouchableOpacity className="flex flex-row justify-center items-center" onPress={() => router.push("/signup")} >
                                <Text className="text-white font-semibold">New user? {" "}</Text>
                                <Text className="text-base font-semibold underline text-[#f49b33]">Sign up</Text>
                            </TouchableOpacity>
                            <Text className="text-center text-lg font-semibold my-4 text-white">
                                <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />{" "}or{" "}
                                <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />
                            </Text>
                            <TouchableOpacity className="flex flex-row justify-center items-center" onPress={() => router.push("/home")} >
                                <Text className="text-white font-semibold">Be a </Text>
                                <Text className="text-base font-semibold underline text-[#f49b33]">Guest user</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View className="flex-1">
                    <Image
                        source={entryImg}
                        className="w-full h-full "
                        resizeMode="contain"
                    />
                </View>

                <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Signin;
