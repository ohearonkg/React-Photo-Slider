var genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = function(baseConfig, env) {
  var config = genDefaultConfig(baseConfig, env);
    config.module.rules.push(
      
      /* Typescript */
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      }
  );
  config.resolve.extensions.push(".tsx");
  config.resolve.extensions.push(".ts");
 
  return config;
}