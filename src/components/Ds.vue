<template>
  <div class="ds">
    <Film txt='新书速递'>
      <MyBanner swipeid='asd2' :slidesPerView='3.5' :loop='false' :spaceBetween='10' slot='film'>
					<div v-for='item in arr' class="img1 swiper-slide" :key='item.id' slot='swiper-con'>
						<img :src="item.cover" class="IMG1">
						<span>{{ item.title }}</span><br/>
						<div class="score">
							<img src="../assets/images/rating_star_small_on.png">
							<img src="../assets/images/rating_star_small_on.png">
							<img src="../assets/images/rating_star_small_on.png">
							<img src="../assets/images/rating_star_small_half.png">
							<img src="../assets/images/rating_star_small_off.png">
						</div>
						<span slot='pf' class="pf">评分{{ item.rate }}</span>
					</div>
			</MyBanner>
    </Film>
    <Film txt='新书速递'>
      <MyBanner swipeid='asd2' :slidesPerView='3.5' :loop='false' :spaceBetween='10' slot='film'>
					<div v-for='item in arr1' class="img1 swiper-slide" :key='item.id' slot='swiper-con'>
						<img :src="item.cover" class="IMG1">
						<span>{{ item.title }}</span><br/>
						<div class="score">
							<img src="../assets/images/rating_star_small_on.png">
							<img src="../assets/images/rating_star_small_on.png">
							<img src="../assets/images/rating_star_small_on.png">
							<img src="../assets/images/rating_star_small_half.png">
							<img src="../assets/images/rating_star_small_off.png">
						</div>
						<span slot='pf' class="pf">评分{{ item.rate }}</span>
					</div>
			</MyBanner>
    </Film>
    <Film txt='新书速递'>
      <MyBanner swipeid='asd2' :slidesPerView='3.5' :loop='false' :spaceBetween='10' slot='film'>
					<div v-for='item in arr2' class="img1 swiper-slide" :key='item.id' slot='swiper-con'>
						<img :src="item.cover" class="IMG1">
						<span>{{ item.title }}</span><br/>
						<div class="score">
							<img src="../assets/images/rating_star_small_on.png">
							<img src="../assets/images/rating_star_small_on.png">
							<img src="../assets/images/rating_star_small_on.png">
							<img src="../assets/images/rating_star_small_half.png">
							<img src="../assets/images/rating_star_small_off.png">
						</div>
						<span slot='pf' class="pf">评分{{ item.rate }}</span>
					</div>
			</MyBanner>
    </Film>
  </div>
</template>

<script>
import MyBanner from "./Banner";
import Film from "./Film";
// import { fn3 } from "../../src/assets/libs/js/axios.js";
export default {
  data() {
    return {
      arr: [],
      arr1: [],
      arr2: [],
      url: "static/data/banner.json",
      fn1:  response => {
        console.log(response.data.subjects);
        console.log(this)
        this.arr = response.data.subjects.slice(33, 39);
        this.arr1 = response.data.subjects.slice(7, 11);
        this.arr2 = response.data.subjects.slice(25, 31);
      },
    };
  },
  components: {
    MyBanner,
    Film
  },
  mounted: function() {
    //页面挂载前执行axios获取数据
    this.fn();

  },
  methods: {
    fn() {
      this.$http.get().then(this.fn1);
    }
  }
};
//  this.axios.get(this.url).then(this.fn1);
// response => {
//         console.log(response.data.subjects);
//         this.arr = response.data.subjects.slice(0, 6);
//         this.arr1 = response.data.subjects.slice(7, 11);
//         this.arr2 = response.data.subjects.slice(11, 17);
//         //console.log(arr)
//       }
</script>

<style>
.ds {
  background: #eee;
}
.ds p span {
  color: #42bd56;
  float: right;
  padding-right: 15px;
  font-size: 14px;
}
.ds p i {
  padding-left: 10px;
}
/*.dy .swiper-wrapper img{width:100%;margin:10px 10px;}*/
.ds .swiper-wrapper {
  width: 100%;
}
.ds .swiper-wrapper .img1 {
  width: 30px;
}
.ds .swiper-wrapper .img1 span {
  font-size: 14px;
  white-space: nowrap;
}
.ds .swiper-wrapper .img1 .pf {
  font-size: 12px;
}
.ds .swiper-wrapper .img1 span:nth-of-type(1) {
  font-size: 12px;
}
.ds .swiper-wrapper .score img {
  width: 10px;
  height: 10px;
  float: left;
  padding-top: 5px;
}
.clear {
  height: 64px;
}
.ds .news {
  margin-top: 10px;
  border: none;
}
.ds .ds_p {
  font-size: 14px;
  overflow: hidden;
  color: #999;
  padding-top: 10px;
  width: 100%;
  height: 60px;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.ds .IMG1 {
  height: 148px;
}
</style>
