<template>
	<div class="filmList" id="filmcomponent">
		<p>{{ txt }}<span>更多<i>></i></span></p>
		<slot name='film'></slot>
	</div>
</template>

<script type="text/javascript">
export default {
  props: ["txt"],
  name: "filmComponent"
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
