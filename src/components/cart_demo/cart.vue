<template>
  <div class="cart">
    <cart_header></cart_header>
    <div class="item_area">
      <item v-for="item in list" :key="item.id" :Info="item"></item>
      <!-- <item></item>
      <item></item>
      <item></item> -->
    </div>
    <cart_footer></cart_footer>
  </div>
</template>

<script>
import cart_header from "./cart/cart_header.vue";
import cart_footer from "./cart/cart_footer.vue";
import item from "./cart/item.vue";
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("cart/getList");
  },
  components: {
    cart_header,
    cart_footer,
    item,
  },
  computed: {
    ...mapState("cart", ["list"]),
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
  /* border: solid 1px black; */
  padding: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 10px 4px rgba(193, 193, 193, 0.8);
}

.item_area {
  margin: 5px 0;
  /* border: solid 1px black; */
  /* flex: 1; */
  height: 300px;
  overflow: scroll;
}
</style>