module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          assets: './src/assets',
          navigation: './src/navigation',
          screens: './src/screens',
          containers: './src/containers',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
