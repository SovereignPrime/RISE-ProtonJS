module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
    { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        type: "asset/resource"
    },
    { 
        test: /\.(ttf|eot|svg|png|jp.g|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        type: "asset/resource"
    },
  {
       test: /\.jsx?$/,
       use: {
           loader: 'babel-loader',
           options: {
               exclude: /node_modules/,
               presets: ['@babel/preset-react']
           }
       }
   },
  // Put your webpack loader rules in this array.  This is where you would put
  // your ts-loader configuration for instance:
  /**
   * Typescript Example:
   *
   * {
   *   test: /\.tsx?$/,
   *   exclude: /(node_modules|.webpack)/,
   *   loaders: [{
   *     loader: 'ts-loader',
   *     options: {
   *       transpileOnly: true
   *     }
   *   }]
   * }
   */
];
