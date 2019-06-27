<template>
  <div class="broadcast">
    <MyHeader>
      <span class="title" slot="search">
        <router-link to="/hello">广播</router-link>
      </span>
      <span slot="ltImg" class="ltImg">
        <img src="../../assets/images/ic_group_search.png">
      </span>
      <span slot="rtImg" class="rtImg">
        <router-link to="/">
          <img src="../../assets/images/ic_chat_green.png">
        </router-link>
      </span>
    </MyHeader>
    <div class="height"></div>
    <MyPage3></MyPage3>
  </div>
</template>

<script>
import MyHeader from "../../components/header";
import MyPage3 from "../../components/page3";
export default {
  components: {
    MyHeader,
    MyPage3
  }
};
</script>

<style>
.broadcast span a {
  color: black;
}
.ltImg img {
  width: 25px;
  position: absolute;
  top: 12px;
  right: 50px;
}
.rtImg img {
  width: 25px;
  position: absolute;
  top: 12px;
  right: 12px;
}
.height {
  height: 48px;
}
</style>
