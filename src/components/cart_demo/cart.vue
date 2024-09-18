<template>
  <div class="cart">
    <cart_header></cart_header>
    <cart_item class="item_area"></cart_item>
    <cart_footer></cart_footer>
  </div>
</template>

<script>
import cart_header from "./cart/cart_header.vue";
import cart_item from "./cart/cart_item.vue";
import cart_footer from "./cart/cart_footer.vue";

export default {
  components: {
    cart_header,
    cart_item,
    cart_footer,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.cart {
  width: 400px;
  /* height: 800px; */
  border: solid 1px black;
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item_area {
  flex-grow: 1;
}
</style>