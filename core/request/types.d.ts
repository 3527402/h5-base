import type { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestInterceptors<T = AxiosResponse> {
  // 请求拦截
  request?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
  requestCatch?: (err: any) => any;
  // 响应拦截
  response?: (config: T) => T;
  responseCatch?: (err: any) => any;
}

/**
 * @description: 自定义传入的参数
 * @generic D 请求参数类型
 * @generic T 响应参数类型
 */
export interface RequestConfig<D = any, T = AxiosResponse> extends AxiosRequestConfig<D> {
  interceptors?: RequestInterceptors<T>;
}

/**
 * @description: 响应数据类型
 * @generic T 响应数据中data的类型
 */
export interface Response<T = any> {
  isError?: boolean;
  data?: T;
  code?: string;
  message?: string;
  requestId?: string;
}
