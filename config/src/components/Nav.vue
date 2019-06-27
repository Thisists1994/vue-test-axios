<template>
<div class="nav">
		<ul>
			<li @click='fn(0)' :class='{green1:sel==0}'><router-link to='/audio/Dy'>电影</router-link></li>
			<li @click='fn(1)' :class='{green1:sel==1}'><router-link to='/audio/Ds'>读书</router-link></li>
			<li @click='fn(2)' :class='{green1:sel==2}'><router-link to='/audio/Dshi'>电视</router-link></li>
			<li @click='fn(3)' :class='{green1:sel==3}'><router-link to='/audio/Tc'>同城</router-link></li>
			<li @click='fn(4)' :class='{green1:sel==4}'><router-link to='/audio/Music'>音乐</router-link></li>
		</ul>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  data(){
    return{
      sel:0
    };
  },
  methods:{
    fn(i){
      this.sel = i;//对上面的li进行判断,:class='{green1:sel==0}',当sel的值=0的时候 添加classname
    }
  }
};
</script>

<style>
.nav ul {
  list-style-type: none;
  height: 35px;
  line-height: 35px;
  border-bottom: 1px solid lightgray;
  text-align: left;
  background: #fff;
}
.nav li {
  display: inline-block;
  width: 19%;
  text-align: center;
}
.nav a {
  text-decoration: none;
  font-size: 14px;
  color: black;
}
.nav .green1 {
  border-bottom: 1px solid #42bd56;
}
.nav .green1 a {
  color: #42bd56;
}
</style>

