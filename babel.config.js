module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@routes': './src/routes',
            '@utils': './src/utils',
            '@types': './src/types',
            '@storage': './src/storage',
          },
        },
      ],
    ],
  };
};
