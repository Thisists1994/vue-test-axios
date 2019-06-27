<template>
  <div class="filmList" id="filmcomponent">
    <p>
      {{ txt }}
      <span>
        更多
        <i>></i>
      </span>
    </p>
    <!-- 通过$emit 接收父级传递过来的方法 -->
    <button @click="$emit('enlarge-text')">调用父级传递过来的方法</button>
    <slot name="film"></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ["txt"],
  name: "filmComponent",
  methods: {}
};
</script>

<style type="text/css">
.filmList {
  background-color: #fff;
  margin-top: 10px;
  padding-bottom: 10px;
}
.filmList p {
  text-align: left;
  line-height: 50px;
  padding-left: 10px;
  font-size: 16px;
}
.filmList p:nth-of-type(1) {
  font-family: "微软雅黑";
  font-weight: bold;
}
</style>
