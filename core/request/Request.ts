import axios, { AxiosResponse, AxiosHeaders } from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import type { RequestConfig, RequestInterceptors, Response } from './types';

/**
 * axios拦截器封装，执行顺序 接口请求 -> 实例请求 -> 全局请求 -> 全局响应 -> 实例响应 -> 接口响应
 */
class Request {
  // axios 实例
  instance: AxiosInstance;
  // 实例自定义拦截器
  customInterceptors?: RequestInterceptors;

  constructor(requestConfig: RequestConfig) {
    this.instance = axios.create(requestConfig);
    this.customInterceptors = requestConfig.interceptors;

    // 注册全局请求拦截
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 如果没指定请求数据类型，默认 json
        if (!config.headers['Content-Type']) {
          config.headers['Content-Type'] = 'application/json;charset=UTF-8';
        }
        return config;
      },
      (err: any) => err,
    );

    // 注册全局响应拦截
    this.instance.interceptors.response.use(
      (res: AxiosResponse<Response>) => {
        const result = res.data;
        if (result) {
          if (result.isError) {
            // isError 为 true, 接口请求出错
            if (
              result.code === '9990001' ||
              result.code === '9990002' ||
              result.message === 'INVALID_TOKEN'
            ) {
              // token 失效
              window.ovopark && window.ovopark.emit('token-invalid');
            }
          } else {
            // 正常返回数据
            return result.data;
          }
        }
        return Promise.reject(result || { message: '请求出错，请稍候再试' });
      },
      (err: any) => {
        const { response } = err;
        if (response) {
          errorHandle(response.status, response.data);
          return Promise.reject(response);
        }
        if (!err.message) {
          err.message = '请求出错，请稍候再试';
        }
        throw err;
      },
    );

    // 使用实例拦截器
    this.instance.interceptors.request.use(
      this.customInterceptors?.request,
      this.customInterceptors?.requestCatch,
    );
    this.instance.interceptors.response.use(
      this.customInterceptors?.response,
      this.customInterceptors?.responseCatch,
    );
  }

  request<T>(config: RequestConfig<any, T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求的拦截器
      if (!config.headers) {
        config.headers = new AxiosHeaders();
      }
      if (config.interceptors?.request) {
        config = config.interceptors.request(config as InternalAxiosRequestConfig);
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个响应的拦截器
          if (config.interceptors?.response) {
            res = config.interceptors.response(res);
          }
          resolve(res);
        })
        .catch((err: any) => {
          // 单个响应异常的拦截器
          if (config.interceptors?.responseCatch) {
            err = config.interceptors.responseCatch(err);
          }

          reject(err);
        });
    });
  }

  /** get请求 */
  get<T>(url: string, data?: any): Promise<T> {
    return this.request<T>({
      url,
      method: 'GET',
      params: data,
    });
  }
  /** post请求，body为form表单 */
  postForm<T>(url: string, data?: any): Promise<T> {
    return this.request<T>({
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data,
    });
  }
  /** post请求，body为json */
  post<T>(url: string, data?: any): Promise<T> {
    return this.request<T>({
      url,
      method: 'POST',
      data,
    });
  }
}

const errorHandle = (status: number, other: any) => {
  switch (status) {
    case 400:
      console.log('信息校验失败');
      break;
    case 401:
      console.log('认证失败');
      break;
    case 403:
      console.log('token校验失败');
      break;
    case 404:
      console.log('请求的资源不存在');
      break;
    default:
      console.log(other);
      break;
  }
};

export default Request;
