module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@config': './src/config',
          '@constants': './src/constants',
          '@contexts': './src/contexts',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};

/* {
  "plugins": [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "@components": "./src/components",
        "@assets": "./src/assets"
        // Add more aliases as needed
      }
    }]
  ]
}
 */
