<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>This is ts`s test</h2>
    <ul>
      <li>
        <a href>
          <router-link to="/audio/Dy">书影音</router-link>
        </a>
      </li>
      <li>
        <a href>
          <router-link to="/broadcast">广播</router-link>
        </a>
      </li>
      <li>
        <a href>
          <router-link to="/Myplayer">视频播放</router-link>
        </a>
      </li>
      <li>
        <a href>
          <router-link to="/WyCloudApi">调用网易云接口</router-link>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Vue Test."
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 30px 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
