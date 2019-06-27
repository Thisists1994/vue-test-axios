<template>
	<div class="audio">
		<MyHeader>
			<span class='title' slot='search'><router-link to='/hello'>书影音</router-link></span>
			<span slot='ltImg' class="ltImg"><img src="../../assets/images/ic_group_search.png"></span>
			<span slot='rtImg' class="rtImg"><router-link to='/'><img src="../../assets/images/ic_chat_green.png"></router-link></span>
		</MyHeader>
		<div class="height"></div>
		<MyPage2></MyPage2>
	</div>
</template>

<script type="text/javascript">
import MyHeader from "../../components/header";
import MyPage2 from "../../components/page2";
export default {
  components: {
    MyHeader,
    MyPage2
  }
};
</script>

<style>
.audio span a{
  color: black;
}
.audio .ltImg img {
  width: 25px;
  position: absolute;
  top: 12px;
  right: 50px;
}
.audio .rtImg img {
  width: 25px;
  position: absolute;
  top: 12px;
  right: 12px;
}
.audio .height {
  height: 48px;
}
</style>
