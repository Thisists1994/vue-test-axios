
import bannerComponent from './Banner.vue'

const banner = {
  install: function (Vue) {
    Vue.component('MyBanner', bannerComponent)
  }
}

export default banner;
