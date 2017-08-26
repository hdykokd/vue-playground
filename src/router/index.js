import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Components from '@/components/ui-components/Components';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/components',
      name: 'components',
      component: Components,
    },
    {
      path: '/components/:name',
      name: 'components-item',
      component: Components,
    },
  ],
});
