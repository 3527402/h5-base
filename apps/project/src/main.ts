import App from './App.vue';
import router from './router';
import { getUserByMobilePhone } from 'core/request';
import store, { useBaseStore } from 'core/store';
import { gotoOauth } from 'core/utils';
import vant, { showDialog, showToast, Lazyload } from 'vant';
import 'core/style/common.scss';

window.ovopark.ready(() => {
  // 创建 vue 实例
  createApp(App)
    .use(store)
    .use(router)
    .use(vant) // 注册vant
    .use(Lazyload, {
      lazyComponent: true,
    })
    .mount('#app');

  const baseStore = useBaseStore();

  // 监听 sdk token 处理
  window.ovopark.on('token-refreshed', (token: string) => {
    baseStore.setToken(token);
  });
  let tokenGetting = false; // 本地开发时，token获取中，防止接口并发多次获取token
  window.ovopark.on('token-invalid', () => {
    if (process.env.NODE_ENV === 'development') {
      if (tokenGetting) {
        return;
      }
      // 本地运行时，token失效后通过手机号换取身份
      const phone = localStorage.getItem('shopPhone');
      if (phone) {
        tokenGetting = true;
        getUserByMobilePhone(phone).then((res: any) => {
          baseStore.setToken(res.token);
          window.ovopark.setToken(res);
          showToast('token获取成功，请刷新页面');
        });
      } else {
        showDialog({
          allowHtml: true,
          message:
            "token失效了<br />本地开发时可以使用手机号换取token<br /><br />localStorage.setItem('shopPhone', '手机号'), 然后刷新页面",
        });
      }
    } else {
      baseStore.setToken('');
      // 非本地运行，则根据路由判断是否跳转授权
      router.isReady().then(() => {
        if (!router.currentRoute.value.meta?.public) {
          gotoOauth();
        }
      });
    }
  });
});
