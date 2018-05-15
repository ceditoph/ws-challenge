const _ = require('lodash');
const path = require('path');
const fs = require('fs-extra');

const webpack = require("webpack");

let lastHash = null;

const args = _.reduce([
  'all',
  'watch'
], (out, argname) => {
  out[argname] = _.includes(process.argv.slice(2), '--' + _.kebabCase(argname));
  return out;
}, {});

const pathToBuild = path.join(__dirname, 'build');

const bundleConfig = {
  watch: args.watch,
  entry: {
    app: './src/app.js'
  },
  output: {
    path: pathToBuild,
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }]
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      use: [
        'css-loader',
        'less-loader'
      ]
    }]
  }
};

fs.copy(path.join(__dirname, 'static'), pathToBuild)
  .then(makeBundles)
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

function makeBundles(){
  return new Promise((resolve, reject) => {
    webpack(bundleConfig, (err, stats) => {
      if(err){
        reject(err);
      }
    
      const info = stats.toJson();
      
      if(info.hash !== lastHash){
        if(stats.hasErrors()){
          // console.error(info.errors);
        }
    
        if(stats.hasWarnings()){
          console.warn(info.warnings);
        }
    
        console.log(stats.toString({
          colors: true
        }));
      }
      
      lastHash = info.hash;

      resolve(info);
    });
  })
}

