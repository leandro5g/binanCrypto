module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'import-glob',
      [
        'module-resolver',
        {
          alias: {
            app: './src',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
