import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { gotoOauth } from 'core/utils';
import { showToast } from 'vant';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      title: '首页',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  const baseStore = useBaseStore();
  if (!baseStore.token && !to.meta?.public) {
    if (process.env.NODE_ENV === 'development') {
      showToast('token失效！');
    } else {
      // 非本地运行，跳转授权
      gotoOauth();
    }
  }

  const title = (to.meta?.title as string) || 'h5子项目模板';
  window.ovopark.setTitle(title);
});

export default router;
