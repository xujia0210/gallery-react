import axios from 'axios';
import { error } from 'util';
// 取消请求
// let CancelToken = axios.CancelToken;
axios.create({
  timeout: 15000, // 请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 开始请求设置，发起拦截处理
axios.interceptors.request.use(config => {
  // post 和 get 请求方式不同
  // let requestName = config.method === 'post' ? config.data.requestName : config.params.requestName
  // // 判断，如果这里拿到上一次的requestName，就取消上一次的请求
  // if(requestName) {
  //   if(axios[requestName] && axios[requestName].cancel) {
  //     axios[requestName].cancel()
  //   }
  //   config.cancelToken = new cancelToken(c => {
  //     axios[requestName] = {}
  //     axios[requestName].cancel = c
  //   })
  // }
  return config
}, error => {
  return Promise.reject(error)
})
// response 拦截器
axios.interceptors.response.use(response => {
  const res = response.data;
  // 这里根据后台返回来设置
  if(res.msg === 'success') {
    return response.data;
  } else {
    return Promise.reject(error);
  }
}, error => {
  return Promise.reject(error)
})

export default axios