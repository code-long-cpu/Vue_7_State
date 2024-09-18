<template>
  <div class="item_area">
    <div class="cart_item">1</div>
    <div class="cart_item">2</div>
    <div class="cart_item">3</div>
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
.item_area {
  margin: 5px 0;
  /* border: solid 1px black; */
  overflow: scroll;
}
.cart_item {
  height: 100px;
  border: solid 1px black;
  margin: 5px 10px;
}
</style>