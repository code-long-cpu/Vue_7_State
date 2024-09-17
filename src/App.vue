<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>
      根组件<span> -{{ $store.state.title }} -{{ $store.state.count }}</span>
      <br />
    </h1>
    <h3>
      <!-- ③模板中使用 -->
      根组件(mapState)<span> -{{ title }} -{{ count }}</span>
    </h3>
    根组件输入：<input
      :value="count"
      @input="changeCount"
      type="text"
      autocomplete="off"
    />
    <hr />
    <Son_1></Son_1>
    <hr />
    <Son_2></Son_2>
  </div>
</template>

<script>
// import { mapState } from "vuex";
// import HelloWorld from './components/HelloWorld.vue'
import Son_1 from "./components/Son1.vue";
import Son_2 from "./components/Son2.vue";
// ①导入辅助函数
import { mapState } from "vuex";
// console.log(mapState(["count", "title"]));

export default {
  name: "App",
  created() {
    console.log(this.$store);
    console.log(this.$store.state.count);
    console.log(mapState(["count"]));
  },
  // ②计算属性展开mapState（）映射
  computed: {
    // ②数组方式引入state数据
    ...mapState(["count", "title"]),
  },
  methods: {
    changeCount(e) {
      const num = +e.target.value;
      this.$store.commit("changeCount", num);
    },
  },
  components: {
    // HelloWorld,
    Son_1,
    Son_2,
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  width: 440px;
  border: solid 1px black;
  padding: 10px;
}
span {
  color: red;
}
</style>
