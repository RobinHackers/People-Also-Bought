// const path = require("path");

// module.exports = {
//   entry: path.join(__dirname, "client", "App.jsx"),
//   output: {
//     filename: "bundle.js",
//     path: path.join(__dirname, "public")
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx$/,
//         exclude: /node_modules/,
//         use: {
//           loaders: [
//             {exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/},
//             {loader: 'style-loader!css-loader', test: /\.css$/},
//             {loader: 'url-loader', test: /\.gif$/},
//             {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
//           ],
//         }
//       }
//     ]
//   }, 
//   resolve: {
//     alias: {
//       config$: './configs/app-config.js',
//       react: './vendor/react-master',
//     },
//     extensions: ['', 'js', 'jsx'],
//     modules: [
//       'node_modules',
//       'bower_components',
//       'shared',
//       '/shared/vendor/modules',
//     ],
//   },
// };

// module.exports = {
//   module: {
//     loaders: [
//       {exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/},
//       {loader: 'style-loader!css-loader', test: /\.css$/},
//       {loader: 'url-loader', test: /\.gif$/},
//       {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
//     ],
//   },
//   resolve: {
//     alias: {
//       config$: './configs/app-config.js',
//       react: './vendor/react-master',
//     },
//     extensions: ['', 'js', 'jsx'],
//     modules: [
//       'node_modules',
//       'bower_components',
//       'shared',
//       '/shared/vendor/modules',
//     ],
//   },
// };


const path = require("path");

module.exports = {
  entry: path.join(__dirname, "client", "App.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, 
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [ 'style-loader', 'css-loader' ]
//       }
//     ]
//   }
// }





// module.exports = {
//   entry: __dirname + "/client/App.jsx",
//   output: {
//     filename: "bunsdle.js",
//     path: __dirname + "/public"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       }
//     ]
//   }
// };
