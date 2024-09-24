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
    <button @click="changeTitle('小龙程序员')">改标题</button>

    <button @click="AsyncCount(888)">一秒后修改888</button>
    <p>state原数组：{{ this.$store.state.list }}</p>
    <p>mapGetters过滤后：{{ filterList }}</p>
    <hr />
    <h4>user与setting模块：访问module中的state(map):</h4>
    <p>{{ userInfo.name }}</p>
    <p>{{ theme }}</p>
    <p>user模块的数据：{{ userInfo }}</p>
    <p>setting模块的数据：{{ theme }}-{{ desc }}</p>

    <h4>测试访问module中的getter(map):</h4>
    {{ upper }}

    <h4>测试调用module中的mutation(map):</h4>
    <p>{{ userInfo.name }}</p>
    <button @click="changeInfo({ name: 'lisi', age: 38 })">更新个人信息</button>
    <button @click="setUserSecond({ name: 'wangwu', age: 28 })">
      一秒后更新个人信息
    </button>

    <p>{{ theme }}</p>
    <button @click="changeTheme('pink')">更新粉色主题</button>
  </div>
</template>

<script>
// ①导入mapState
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  // ③计算属性展开映射
  computed: {
    // 根state映射
    // 映射属性
    // ②数组引入state数据
    ...mapState(["count", "title", "user", "setting"]),
    ...mapGetters(["filterList"]),

    // 模块module映射，加模块名
    // 映射模块中的state值，模块需要namespaced
    ...mapState("user", ["userInfo"]),
    ...mapState("setting", ["theme", "desc"]),

    // 映射模块中的getters值，模块需要namespaced
    ...mapGetters("user", ["upper"]),
  },
  methods: {
    // 根state映射
    //引入修改根state的方法
    ...mapMutations(["subCount", "changeTitle"]),
    ...mapActions(["AsyncCount"]),

    // 模块方法mutation映射,加模块名
    ...mapMutations("user", ["changeInfo"]),
    ...mapMutations("setting", ["changeTheme"]),
    ...mapActions("user", ["setUserSecond"]),
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
  margin: 0 3px;
}
span {
  color: red;
}
</style>