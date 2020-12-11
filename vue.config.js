/*
 * @Author: 吴灏
 * @Date: 2020-12-11 10:21:53
 * @LastEditors: 吴灏
 * @LastEditTime: 2020-12-11 14:06:39
 * @Description: file content
 */
const path = require('path');

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      // 别名配置
      alias: {
        '@': path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'src/components'),
        pages: path.resolve(__dirname, 'src/pages'),
        hooks: path.resolve(__dirname, 'src/hooks'),
      },
    },
  },
};
