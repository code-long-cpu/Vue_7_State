<template>
  <div class="cart_footer">
    <span>共XXX件商品，</span>
    <span>合计：</span><span class="money">￥XXX</span>
    <button>结算</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.cart_footer {
  height: 50px;
  border-top: solid 1px rgb(132, 132, 132);
  border-bottom: solid 1px rgb(132, 132, 132);
  padding: 5px;
  display: flex;
  justify-content: right;
  align-items: center;
  /* background-color: rgb(242, 242, 242); */
}
button {
  width: 80px;
  height: 35px;
  background-color: rgb(65, 186, 129);
  border: 0;
  border-radius: 100px;
  color: white;
  margin-left: 10px;
  cursor: pointer;
}
.money {
  color: rgb(221, 0, 0);
  font-weight: 800;
}
</style>