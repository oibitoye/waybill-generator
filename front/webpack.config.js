// module.exports = {
//     resolve: {
//       fallback: {
//         stream: require.resolve('stream-browserify'),
//       },
//     },
//   };
  

module.exports = {
    // Other webpack configurations...
    resolve: {
        alias: {
          stream: 'stream-browserify'
        }
    },
    mode: 'development', // or 'production' or 'none'
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react'],
              },
            },
        },
        // Add other loaders for different file types if needed
      ],
    },
  };
  