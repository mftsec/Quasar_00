<template>
  <q-footer class="black-footer">
    <q-container class="q-pa-md">
      <div class="row items-center">
        <div class="col-auto">
          <div class="payment-icons">
            <MyFooter2PaymentIcon />
            <MyFooter2PaymentIcon />
            <MyFooter2PaymentIcon />
            <MyFooter2PaymentIcon />
          </div>
        </div>
      </div>
    </q-container>
  </q-footer>
</template>

<script>
import MyFooter2PaymentIcon from 'components/MyFooter2PaymentIcon.vue';

export default {
  name: 'TheFooter2',
  components: {
    MyFooter2PaymentIcon,
  },
};
</script>

<style scoped>
.black-footer {
  background-color: black;
  color: white;
}
</style>
