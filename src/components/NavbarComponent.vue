<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-header class="navbar text-white" height-hint="98">
        <q-toolbar class="justify-center" flex>
          <TheLogo class="logo" />
          <SearchBox />
          <q-list>
            <TabsSection />
          </q-list>
          <q-list>
            <social-icons />
          </q-list>
          <div>
            <cartButton />
            <cart ref="cartComponent" />
          </div>
        </q-toolbar>
      </q-header>

      <router-view> </router-view>
      <q-footer>
        <q-toolbar>
          <q-list> </q-list>
        </q-toolbar>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import SocialIcons from 'components/SocialIcons.vue';
import TheLogo from 'components/TheLogo.vue';
import SearchBox from 'components/SearchBox.vue';
import TabsSection from 'components/TabsSection.vue';

import cartButton from 'components/SepetIcon.vue';
import cartComponent from 'components/SepetIcon.vue';
</script>
<style>
.logo {
  margin-right: 50;
}
.navbar {
  background-color: #312f2f;
}
</style>
