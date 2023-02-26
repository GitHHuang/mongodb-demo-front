const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 添加端口配置
  devServer: {
    port: 8091,
    proxy: {
      '/': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        ws: false
      }
    }

  }
})
