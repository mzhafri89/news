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
          slices: './src/store/reducers',
          store: './src/store',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
