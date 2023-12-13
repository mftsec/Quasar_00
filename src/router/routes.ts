import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('components/IndexPageLayout.vue') },
      {
        path: 'homePageListing',
        component: () => import('components/HomePageListing.vue'),
      },
    ],
  },

  {
    path: '/sepet/',
    component: () => import('layouts/SatisLayout.vue'),
    children: [
      { path: '', component: () => import('components/SepetPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
