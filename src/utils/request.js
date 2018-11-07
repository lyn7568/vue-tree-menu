import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

// 创建axios实例
const service = axios.create({
  paramsSerializer: function(params) {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  }
})

// request拦截器
service.interceptors.request.use(config => {
  // 配置config
  config.headers.Accept = 'application/json'
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
    // 处理后后台无需添加RequestBody
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(response => {
  let data = response.data
  const status = response.status
  if (status === 200) {
    if (response.data === undefined) {
      // 解决IE9数据问题
      data = response.request.responseText
    } else {
      data = response.data
    }
    return response.data
  } else {
    return Promise.resolve(response)
  }
}, error => {
  return Promise.reject(error)
})

var ret = {
  get: function(url, data, sh) {
    service({
      method: 'get',
      url: url,
      params: data
    }).then(res => {
      sh(res)
    }).catch(err => {
      Message.error(err || '网络异常')
    })
  },
  post: function(url, data, sh) {
    service({
      method: 'post',
      url: url,
      data: data
    }).then(res => {
      sh(res)
    }).catch(err => {
      Message.error(err || '网络异常')
    })
  }
}

export default ret
