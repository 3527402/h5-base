import { EnterpriseConfig, Privilege, UserInfo } from '../../types/user';
import request from '../../request/index';

/** 获取企业配置 */
export const getEnterpriseConfig = () => {
  return request.post<EnterpriseConfig>('/ovopark-organize/enterprise/getEnterpriseConfigg');
};

/** 获取用户信息 */
export const getMyInfo = () => {
  return request.get<UserInfo>('/ovopark-organize/enterprise/getMyInfo');
};

/** 获取用户权限 */
export const getMenusPrivileges = () => {
  return request.get<Array<Privilege>>('/ovopark-privilege/privilege/getMenusPrivileges');
};
