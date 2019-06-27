// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'// 使用axios请求,npm install --save axios vue-axios
import VueAxios from 'vue-axios'
import film from './components/index.js'//将组件封装放到全局 引用时不需要import Film from "./Film";可直接引用
import banner from './components/index2.js'
//视频
import VideoPlayer from 'vue-video-player'
// import 'videojs-contrib-hls/dist/videojs-contrib-hls'//增加hls支持
import 'video.js/dist/video-js.css'// 第一个是videoJs的样式，后一个是vue-video-player的样式，因为考虑到我其他业务组件可能也会用到视频播放，所以就放在了main.js内
import 'vue-video-player/src/custom-theme.css'
import 'videojs-flash'

Vue.use(VideoPlayer);
Vue.use(film)
Vue.use(banner)
Vue.prototype.$http = axios //vue原型上增加axios
// Vue.prototype.axios = axios
// Vue.use(VueAxios, axios)
axios.defaults.baseURL = "static/data/banner.json" // 默认请求地址
Vue.config.productionTip = false //设置为 false 以阻止 vue 在启动时生成生产提示。

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },

})
