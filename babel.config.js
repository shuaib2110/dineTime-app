module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
<<<<<<< HEAD
};
=======
};
>>>>>>> 9074a00d6abca68eaa3b5abee23472a5a9551d73
