<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-toolbar class="image-main justify-center" flex>
        <img
          class="size-full"
          src="https://www.kzkulaklik.com/wp-content/uploads/2022/01/KZbanner11-1-1024x256.jpg"
          alt="Main Page"
          width="1140"
          height="285"
        />
      </q-toolbar>

      <router-view>
        <HomePageListing />
      </router-view>

      <q-footer>
        <q-toolbar>
          <q-list> </q-list>
        </q-toolbar>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<script>
import HomePageListing from 'components/HomePageListing.vue';

export default {
  name: 'MainPageLayout',
  components: {
    HomePageListing,
  },
};
</script>

<style scoped>
.image-main {
  padding-top: 10px;
}
</style>
