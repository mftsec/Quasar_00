<template>
  <q-item
    class="header-search header-search-dropdown has-icon has-dropdown menu-item-has-children"
  >
    <q-item-section>
      <q-icon name="search" class="icon-search" />
    </q-item-section>
    <q-item-section>
      <q-menu>
        <q-item>
          <q-input
            v-model="searchQuery"
            outlined
            dense
            placeholder="Ara…"
            class="search-field mb-0"
            @input="search"
          />
          <q-icon
            name="search"
            class="icon-search ux-search-submit"
            @click="submitSearch"
          />
        </q-item>
      </q-menu>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref('');

const search = () => {
  // Arama işlemleri
};

const submitSearch = () => {
  // Arama formunu gönderme işlemleri
};
</script>

<style scoped></style>
