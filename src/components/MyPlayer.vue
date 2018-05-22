<template>
  <div class="container">
    <div class="player">
      <MyHeader>
        <span class='title' slot='search'>
          <router-link to='/hello'>视频</router-link>
        </span>
      </MyHeader>
      <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)">
      </video-player>
      <!-- video-player标签的class必须设置成“video-player vjs-custom-skin”，你引入的样式才能起作用。 -->
    </div>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>

    <div class="arr">
      <input type="checkbox" id="ts" value="ts" v-model="Names">
      <label for="ts">ts</label>
      <input type="checkbox" id="mc" value="mc" v-model="Names">
      <label for="mc">mc</label>
      <input type="checkbox" id="xg" value="xg" v-model="Names">
      <label for="xg">xg</label>
      <br>
      <span>Names:{{ Names }}</span>
    </div>
    <p>{{ message }}</p>
    <p>{{reversedMessage }}</p>

    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ reversedMessage }}</p>
    <input type="text" v-model="fullName">
    <br>
    <input type="text" placeholder="edit" v-model="firstName">
    <input type="text" placeholder="edit" v-model="lastName">
    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <template v-if="loginType==='UserName'">
      <label for="">UserName</label>
      <input type="text" name="" id="" placeholder="UserName">
    </template>
    <template v-else>
      <label for="">Email</label>
      <input type="text" name="" id="" placeholder="Email">
    </template>
    <button @click="loginTypea()">{{loginType}}</button>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";
import videojs from "video.js";
import MyHeader from "./header";

window.videojs = videojs;
require("videojs-contrib-hls/dist/videojs-contrib-hls");
export default {
  data() {
    return {
      checked: true,
      message: "初始值",
      Names: [],
      firstName: "Foo",
      lastName: "Bar",
      loginType: "UserName",
      ok: true,
      // fullName: "Foo Bar",
      playerOptions: {
        //        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        techOrder: ["flash", "html5"], // 兼容顺序
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "application/x-mpegURL",
            src: "http://video.upxueyuan.cn/wbqd0103.m3u8" //你的m3u8地址（必填）
          }
        ],
        // poster: "../assets/logo.png", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试" //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        //        controlBar: {
        //          timeDivider: true,
        //          durationDisplay: true,
        //          remainingTimeDisplay: false,
        //          fullscreenToggle: true  //全屏按钮
        //        }
      }
    };
  },
  components: {
    videoPlayer,
    MyHeader
  },
  methods: {
    onPlayerPlay(player) {
      alert("play");
    },
    onPlayerPause(player) {
      alert("pause");
    },
    loginTypea() {
      if (this.loginType == "UserName") {
        this.loginType = "Email";
      } else {
        this.loginType = "UserName";
      }
      console.log(this.loginType);
    }
  },
  // watch: {
  //   firstName: function(val) {
  //     this.fullName = val + " " + this.lastName;
  //   },
  //   lastName: function(val) {
  //     this.fullName = this.firstName + " " + val;
  //   }
  // },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
    reversedMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    fullName: {
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      set: function(newValue) {
        var name = newValue.split(" ");
        this.firstName = name[0];
        this.lastName = name[name.length - 1];
      }
    }
  }
};
</script>

<style>
.player span a {
  color: black;
}
</style>


