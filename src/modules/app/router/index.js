export default [
  {
    path: '',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: 'about',
    component: () => import('../pages/About.vue'),
  },
  {
    path: 'experience',
    component: () => import('../pages/Experience.vue'),
  },
  {
    path: 'contact-us',
    component: () => import('../pages/ContactUs.vue'),
  },
  {
    path: 'prodductivity',
    component: () => import('../pages/ProdductivityPage.vue'),
  },
];
