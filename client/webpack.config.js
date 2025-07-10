const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Output to ./public
    publicPath: '/', // Important for devServer routing
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.png'],
  },
  devServer: {
    headers: {
    'Referrer-Policy': 'no-referrer', // or keep the default
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
  },
    static: {
      directory: path.join(__dirname, 'public'),
    },
    host: '0.0.0.0',                // Allow connections from all IPs (e.g. ELB, other pods)
    port: 3000,
    allowedHosts: 'all',           // Accept requests from any hostname
    historyApiFallback: true,      // Support for React Router or SPA
    compress: true,                // Enable gzip compression
    hot: true,                     // Enable hot reloading (if applicable)
  },
};
