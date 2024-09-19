<template>
  <div class="cart_item">
    <div class="left">
      <img :src="Info.thumb" alt="" />
    </div>
    <div class="right">
      <div class="right_up">{{ Info.name }}</div>
      <div class="right_bottom">
        <p>￥{{ Info.price }}</p>
        <div class="zengjian">
          <button>-</button>
          <span>{{ Info.count }}</span>
          <button>+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.Info);
  },
  props: {
    Info: {
      type: Object,
      required: true,
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
.cart_item {
  width: 355px;
  height: 100px;
  /* border: solid 1px black; */
  margin: 5px 10px;
  display: flex;
  justify-content: space-between;
}
.cart_item:hover {
  background-color: rgba(141, 141, 141, 0.1);
}
.left {
  flex-shrink: 0;
  height: 100%;
  width: 100px;
}
.left img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.right {
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.right_up {
  font-weight: 800;
}
.right_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right_bottom p {
  font-weight: 800;
  color: rgb(221, 0, 0);
}
.zengjian {
  width: 60px;
  /* border: solid 1px black; */
  display: flex;
  justify-content: space-between;
}
.zengjian button {
  height: 20px;
  width: 20px;
  cursor: pointer;
}
.zengjian span {
  font-weight: 800;
  /* border: solid 1px black; */
  width: 20px;
  height: 20px;
  text-align: center;
  background-color: white;
}
</style>