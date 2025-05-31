const { getDefaultConfig } = require("expo/metro-config");
<<<<<<< HEAD
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
=======
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: './global.css' })
>>>>>>> 9074a00d6abca68eaa3b5abee23472a5a9551d73
