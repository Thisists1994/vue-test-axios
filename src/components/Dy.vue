<template>
  <div class="dy">
    <Myfilm txt="影院热映" @enlarge-text="fn5()">
      <MyBanner swipeid="asd2" :slidesPerView="3.5" :loop="false" :spaceBetween="10" slot="film">
        <div v-for="item in arr" class="img1 swiper-slide" :key="item.id" slot="swiper-con">
          <img :src="item.img">
          <span>{{ item.title }}</span>
          <br>
          <div class="score">
            <img src="../assets/images/rating_star_small_on.png">
            <img src="../assets/images/rating_star_small_on.png">
            <img src="../assets/images/rating_star_small_on.png">
            <img src="../assets/images/rating_star_small_half.png">
            <img src="../assets/images/rating_star_small_off.png">
          </div>
          <span slot="pf" class="pf">{{ item.pf }}</span>
        </div>
      </MyBanner>
    </Myfilm>
    <Tuisong>
      <img src="../assets/images/banner/01.jpg" slot="top">
      <h4 slot="text">前文艺片扛把子耿乐秒变老司机，拒绝和夏雨组CP</h4>
    </Tuisong>
    <!-- 这里可以将仿佛传递给子级组件Film使用 -->
    <Myfilm :txt="'影院即将上映'" @enlarge-text="fn5()">
      <MyBanner swipeid="asd2" :slidesPerView="3.5" :loop="false" :spaceBetween="10" slot="film">
        <div v-for="item in arr" class="img1 swiper-slide" :key="item.id" slot="swiper-con">
          <img :src="item.img">
          <span>{{ item.title }}</span>
          <br>
          <div class="score">
            <img src="../assets/images/rating_star_small_on.png">
            <img src="../assets/images/rating_star_small_on.png">
            <img src="../assets/images/rating_star_small_on.png">
            <img src="../assets/images/rating_star_small_half.png">
            <img src="../assets/images/rating_star_small_off.png">
          </div>
          <span slot="pf" class="pf">{{ item.pf }}</span>
        </div>
      </MyBanner>
    </Myfilm>
  </div>
</template>

<script>
// import MyBanner from "../components/Banner.vue";
// import Film from "./Film";
// MyBanner和Film 已经在main.js里放到了全局,可以作为全局组件使用,不需要再单独import
import Tuisong from "../components/Tuisong.vue";
export default {
  data() {
    return {
      arr: [
        {
          img: require("../assets/images/wx_20170605194925.jpg"),
          title: "神奇女侠",
          pf: "评分:8.2",
          id: 401
        },
        {
          img: require("../assets/dy/IMG_0380_05.jpg"),
          title: "迷失Z城",
          pf: "评分:7.3",
          id: 402
        },
        {
          img: require("../assets/dy/IMG_0380_07.jpg"),
          title: "美好的意外",
          pf: "暂无评分",
          id: 403
        },
        {
          img: require("../assets/dy/IMG_0384_03.jpg"),
          title: "29+1",
          pf: "评分:7.4",
          id: 404
        },
        {
          img: require("../assets/dy/IMG_0384_06.jpg"),
          title: "29+1",
          pf: "评分:7.4",
          id: 405
        },
        {
          img: require("../assets/dy/IMG_0384_08.jpg"),
          title: "29+1",
          pf: "评分:7.4",
          id: 406
        }
      ]
    };
  },
  components: {
    // MyBanner,
    Tuisong
    // Film
  },
  methods: {
    fn5() {
      console.log("电影父级方法传给Film子级用");
    }
  }
};
</script>

<style>
.dy {
  background: #eee;
}
/*	.dy p{text-align: left;line-height: 50px;padding-left: 10px;font-size: 16px;}*/
.dy p span {
  color: #42bd56;
  float: right;
  padding-right: 15px;
  font-size: 14px;
}
.dy p i {
  padding-left: 10px;
}
.dy .swiper-wrapper {
  width: 100%;
}
.dy .swiper-wrapper .img1 {
  width: 30px;
}
.swiper-wrapper .img1 img {
  width: 100px;
}
.dy .swiper-wrapper .img1 span {
  font-size: 14px;
}
.dy .swiper-wrapper .img1 .pf {
  font-size: 12px;
}
.dy .swiper-wrapper .img1 span:nth-of-type(1) {
  font-weight: 800;
}
.dy .swiper-wrapper .score img {
  width: 10px;
  height: 10px;
  float: left;
  padding-top: 5px;
}
</style>
