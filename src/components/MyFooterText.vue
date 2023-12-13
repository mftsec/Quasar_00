<template>
  <div class="col">
    <span class="text-h6">Önemli Bilgiler</span>
    <q-separator />
    <q-list link class="text-h6">
      <q-item to="/paymentAndDelivery">Ödeme ve Teslimat</q-item>
      <q-item to="/warrantyAndReturnPage">Garanti ve İade Şartları</q-item>
      <q-item to="/distanceSalesAgreementPage"
        >Mesafeli Satış Sözleşmesi</q-item
      >
      <q-item to="/privacyAndSecurityPage">Gizlilik politikası</q-item>
      <q-item to="/contact">Bize Ulaşın</q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'MyFooterText',
};
</script>

<style scoped></style>
