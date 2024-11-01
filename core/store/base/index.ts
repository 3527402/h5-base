import { EnterpriseConfig, Privilege, UserInfo } from '../../types/user';
import { getEnterpriseConfig, getMenusPrivileges, getMyInfo } from './user.api';

export const useBaseStore = defineStore('base', {
  // 声明 state 时对象中存在的属性才具备响应性，哪怕是 undefined 也必须先把属性加上 !!!
  state: () =>
    <
      {
        language: string;
        token: string;
        needReload: boolean;
        enterpriseConfig?: EnterpriseConfig;
        userInfo?: UserInfo;
        privileges?: Array<Privilege>;
      }
    >{
      language: '',
      token: window.ovopark.getToken(),
      needReload: false,
      enterpriseConfig: undefined,
      userInfo: undefined,
      privileges: undefined,
    },
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    getEnterpriseConfig() {
      const promise = getEnterpriseConfig();
      promise.then((res) => {
        this.enterpriseConfig = res;
      });
      return promise;
    },
    getUserInfo() {
      const promise = getMyInfo();
      promise.then((res) => {
        this.userInfo = res;
      });
      return promise;
    },
    getMenusPrivileges() {
      const promise = getMenusPrivileges();
      promise.then((res) => {
        this.privileges = res;
      });
      return promise;
    },
  },
});
