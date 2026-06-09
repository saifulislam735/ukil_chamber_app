// // @ds-adherence-ignore -- React Native scaffold; not a web component
// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["babel-preset-expo"],
//     plugins: [
//       [
//         "module-resolver",
//         {
//           root: ["./"],
//           alias: { "@": "./src" },
//         },
//       ],
//     ],
//   };
// };

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
  };
};
