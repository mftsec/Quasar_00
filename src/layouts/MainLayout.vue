<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-header class="bg-white text-black" height-hint="98">
        <q-toolbar class="justify-center" flex>
          <Navbar />
        </q-toolbar>
      </q-header>

      <router-view> </router-view>
      <q-footer>
        <q-toolbar>
          <q-list>
            <Footer />
            <Footer2 />
          </q-list>
        </q-toolbar>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import Navbar from 'components/NavbarComponent.vue';
import Footer from 'components/TheFooter.vue';
import Footer2 from 'components/TheFooter2.vue';
//import MainPageLayout from 'components/IndexPageLayout.vue';
</script>
