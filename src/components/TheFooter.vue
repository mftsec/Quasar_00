<template>
  <q-footer class="bg-white text-primary">
    <q-toolbar class="row items-center justify-between">
      <MyFooterImage />
      <MyFooterText />
    </q-toolbar>
  </q-footer>
</template>

<script>
import MyFooterImage from './MyFooterImage.vue';
import MyFooterText from './MyFooterText.vue';

export default {
  name: 'MyFooter',
  components: {
    MyFooterImage,
    MyFooterText,
  },
};
</script>

<style scoped>
.q-footer {
  background-color: #ffffff;
  text-align: center;
}
</style>
