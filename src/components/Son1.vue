<template>
  <div class="Son_1">
    <h3>Son1子组件（store访问state）</h3>
    从vuex中获取的值：<span>{{ $store.state.count }}</span>
    <br />
    <button @click="add(1)">值 + 1</button>
    <button @click="add(5)">值 + 5</button>
    <button @click="add(10)">值 + 10</button>
    <button @click="changeName">改标题</button>
  </div>
</template>

<script>
export default {
  methods: {
    add(n) {
      this.$store.commit("addCount", n);
    },
    changeName() {
      this.$store.commit("changeTitle", "黑马程序员");
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.Son_1 {
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