<template>
  <div class="Son_1">
    <h3>Son1子组件（store访问state）</h3>
    从vuex中获取的值：<span>{{ $store.state.count }}</span>
    <br />
    <button @click="add(1)">值 + 1</button>
    <button @click="add(5)">值 + 5</button>
    <button @click="add(10)">值 + 10</button>
    <button @click="changeName">改标题</button>
    <button @click="handleChange(666)">一秒后修改为666</button>
    <p>state原数组：{{ $store.state.list }}</p>
    <p>getters过滤后：{{ $store.getters.filterList }}</p>
    <hr />
    <h4>user与setting模块：访问module中的state(原生):</h4>
    <p>{{ $store.state.user.userInfo.name }}</p>
    <p>{{ $store.state.setting.theme }}</p>

    <h4>测试访问module中的getter(原生):</h4>
    <p>{{ $store.getters["user/upper"] }}</p>

    <h4>测试调用module中的mutation(原生):</h4>
    <p>{{ $store.state.user.userInfo.name }}</p>
    <button @click="changeInfo({ name: 'wangwu', age: 28 })">
      更新个人信息
    </button>
    <button @click="changeInfoAgain({ name: 'zhaoliu', age: 30 })">
      一秒后更新个人信息
    </button>

    <p>{{ $store.state.setting.theme }}</p>
    <button @click="changeTheme('blue')">更新蓝色主题</button>
  </div>
</template>

<script>
export default {
  methods: {
    // 根state
    add(n) {
      this.$store.commit("addCount", n);
    },
    changeName() {
      this.$store.commit("changeTitle", "黑马程序员");
    },
    handleChange(num) {
      this.$store.dispatch("AsyncCount", num);
    },
    // 模块，加模块名和方法
    // 调用模块user中的修改信息
    changeInfo(info) {
      this.$store.commit("user/changeInfo", info);
    },
    // 调用模块setting中的修改theme
    changeTheme(color) {
      this.$store.commit("setting/changeTheme", color);
    },
    // 调用模块user中的异步改info
    changeInfoAgain(info) {
      this.$store.dispatch("user/setUserSecond", info);
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
  margin: 0 3px;
}
span {
  color: red;
}
</style>