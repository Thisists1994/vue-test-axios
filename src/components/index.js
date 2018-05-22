// 引入自定义组件
import filmComponent from './Film.vue'

const film = {
  //关键步骤,在main.js中使用vue.use(banner)是会自动调用install,里面必须是组件
  install: function (Vue) {
    Vue.component('Myfilm', filmComponent)
  }
}

export default film;
// main.js里放到引入的是film
// 使用的组件模板名为 Myfilm
