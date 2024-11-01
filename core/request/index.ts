import Request from './Request';
import { useBaseStore } from '../store/base';

const request = new Request({
  baseURL: '/',
  timeout: 1000 * 60,
  interceptors: {
    request: (config) => {
      if (config.headers) {
        config.headers['Ovo-Authorization'] =
          useBaseStore().token + ' h5 1.0 SIMPLIFIED_CHINESE GMT+8:00';
      }
      return config;
    },
  },
});

export default request;

/**
 * 通过手机号获取token，-- 只可在本地开发时使用！！！
 * @param mobilePhone 手机号
 * @returns token信息
 */
export const getUserByMobilePhone = (mobilePhone: string) => {
  return request.postForm('/weixin/user/getUserByMobilePhone', { mobilePhone });
};
