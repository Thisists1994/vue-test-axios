<template>
  <div>
    <MyHeader>
      <span class="title" slot="search">
        <router-link to="/hello">网易云音乐查询器</router-link>
      </span>
    </MyHeader>
    <ul style="padding-top:50px;">
      <li>
        1.电台ID:
        <input type="text" v-model="ID">
      </li>
      <li>
        2.搜索内容:
        <input type="text" v-model="searchKey">
      </li>
      <li>
        <button @click="search" @keyup.enter="search()">搜索</button>
      </li>
    </ul>
  </div>
</template>

<script>
import MyHeader from "./header";

export default {
  data() {
    return {
      ID: "1176054",
      searchKey: ""
    };
  },
  components: {
    MyHeader
  },
  methods: {
    search: function() {
      console.log("ID", this.ID);
      console.log("searchKey", this.searchKey);
      this.axios({
        url: "http://localhost:3000/dj/program",
        withCredentials: true,
        params: {
          rid: this.ID,
          searchKey: this.searchKey
        }
      }).then(response => {
        console.log(response);
      });
    }
  }
};
</script>
<style scoped>
.title a {
  color: #000;
}
</style>