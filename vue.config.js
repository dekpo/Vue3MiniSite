const path = require('path');
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue3MiniSite/'
    : '/',
    outputDir: path.resolve(__dirname,'./docs'),
  }