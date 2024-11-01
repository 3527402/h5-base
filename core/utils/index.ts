import { useBaseStore } from '../store/base';

/** 跳转授权页面 */
export const gotoOauth = () => {
  if (window.ovopark.isApp) {
    // 万店掌App内调协议通知 token失效
    window.ovopark.action('invalidToken');
  } else {
    const baseStore = useBaseStore();
    window.location.href = `/webview/h5base/index.html/oauth?groupId=${
      baseStore.userInfo?.data?.groupId || ''
    }&redirectUri=${encodeURIComponent(location.href)}`;
  }
};
