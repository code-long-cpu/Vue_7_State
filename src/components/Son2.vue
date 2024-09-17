<template>
  <div class="Son_2">
    <h3>Son2子组件（mapState访问state）</h3>
    <!-- 从vuex中获取的值：<span>{{ $store.state.count }}</span> -->
    <!-- ④模板中使用state数据 -->
    从vuex中获取的值：<span>{{ count }}</span>
    <br />
    <button @click="subCount(1)">值 - 1</button>
    <button @click="subCount(5)">值 - 5</button>
    <button @click="subCount(10)">值 - 10</button>
  </div>
</template>

<script>
// ①导入mapState
import { mapState, mapMutations } from "vuex";

export default {
  // ③计算属性展开映射
  computed: {
    // ②数组引入state数据
    ...mapState(["count", "title"]),
  },
  methods: {
    //引入修改state的方法
    ...mapMutations(["subCount"]),
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.Son_2 {
  width: 400px;
  border: solid 1px black;
  padding: 10px;
  margin: 20px;
}
button {
  cursor: pointer;
}
span {
  color: red;
}
</style>