<!-- CartButton.vue -->
<template>
  <q-btn @click="toggleCart" class="q-mb-md">
    <q-icon name="shopping_cart" />
    <span class="cart-count" v-if="cartItemCount > 0">{{ cartItemCount }}</span>
  </q-btn>
</template>

<script>
export default {
  data() {
    return {
      cartItemCount: 0,
      cartVisible: false,
    };
  },
  methods: {
    toggleCart() {
      this.cartVisible = !this.cartVisible;
    },
  },
  watch: {
    $root: {
      deep: true,
      handler() {
        this.cartItemCount = this.$root.$data.cartItems.length;
      },
    },
  },
};
</script>

<style scoped>
.cart-count {
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
