import request from 'core/request';

/**
 * request demo 方法，正式项目中请删除
 * @param param 示例参数
 */
export const requestDemo = (param: string) => {
  return request.post('/api/demo', { param });
};
