<template>
  <div class="banner" id="MyBanner">
    <div class="swiper-container" :class='swipeid'>
      <!-- 通过swipeid区分是第几个banner -->
        <div class="swiper-wrapper">
			    <slot name='swiper-con'></slot>
		    </div>
        <!-- 如果需要分页器 -->
        <div :class='{"swiper-pagination":bol}' :style='{"text-align":str}'></div>
    </div>
  </div>
</template>

<script>
import "../assets/libs/swiper/js/swiper.js";
export default {
  name: "MyBanner",
  props: {
    swipeid: {
      type: String,
      default: ""
    },
    bol: {
      type: Boolean,
      default: false
    },
    str: {
      type: String,
      default: "center"
    },
    effect: {
      type: String,
      default: "slide"
    },
    loop: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    autoplay: {
      type: Number,
      default: 0
    },
    paginationType: {
      type: String,
      default: "bullets"
    },
    slidesPerView: {
      type: Number,
      default: 1
    },
    spaceBetween: {
      type: Number,
      default: 0
    },
    autoplayDisableOnInteraction: {
      type: Boolean,
      default: false
    },
    freeMode: {
      type: Boolean,
      default: true
    },
    initialSlide: {
      type: Number,
      default: 0
    },
    boolean: {
      type: Boolean,
      default: true
    },
    observer: {
      type: Boolean,
      default: true
    },
    observeParents: {
      type: Boolean,
      default: true
    }
  },
  //挂载后
  mounted: function() {
    var That = this;
    new Swiper("." + That.swipeid, {
      //循环
      loop: That.loop,
      //分页器
      pagination: ".swiper-pagination",
      //分页器类型
      paginationType: That.paginationType,
      //定时器
      autoplay: That.autoplay,
      //切换方向
      direction: That.direction,
      //切换效果
      effect: That.effect,

      slidesPerView: That.slidesPerView,

      observer: That.observer,

      observeParents: That.observeParents,
      //用户操作后是否终止操作,默认为false
      autoplayDisableOnInteraction: false,
      freeMode: That.freeMode,
      initialSlide: That.initialSlide, //free模式动量值
      boolean: That.boolean
    });
  }
};
</script>

<style>
@import "../assets/libs/swiper/css/swiper.min.css";
.swiper-container img {
  width: 100%;
}
.swiper-pagination-bullet-active {
  background: #fff;
}
.score img {
  width: 10px;
  height: 10px;
  float: left;
  padding-top: 5px;
}
</style>
