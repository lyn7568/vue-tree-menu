import axios from 'axios'
import qs from 'qs'
import { Message, Loading } from 'element-ui'
// Loading 可根据需求选择使用

// 创建axios实例
const service = axios.create({
// 	baseURL: process.env.BASE_URL, // api的base_url
// 	timeout: 5000, // 请求超时时间
// 	withCredentials: true, // 表明是否有跨域请求需要用到证书
  paramsSerializer: function(params) { // params参数序列化器
    return qs.stringify(params, { arrayFormat: 'repeat' })
  }
})

let loadingInstance = Loading.service({
  text:'数据加载中……',
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, 0.7)'
});
// request拦截器
service.interceptors.request.use(config => {
  loadingInstance
  // 配置config
  config.headers.Accept = 'application/json'
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
    // 处理后后台无需添加RequestBody
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return config
}, error => {
  Message.error({ error })
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(response => {
  loadingInstance.close()
  let taR = response.data
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    if (response.data === undefined) {  // 解决IE9数据问题
      taR = response.request.responseText
    } else {
      taR = response.data
    }
    if (!(taR instanceof Object)) {	// 判断taR不是Object时，解析成Object
      taR = JSON.parse(taR)
    }
    return taR
  } else {
    Message.error({ response })
    return Promise.resolve(response)
  }
}, error => {
  let text = JSON.parse(JSON.stringify(error)).response.status === 404
      ? '404'
      : '网络异常，请重试';
  Message.error({ error })
  return Promise.reject(error)
})

var ret = {
  get: function(url, Da, sh, eh) {
    service({
      method: 'get',
      url: url,
      params: Da
    }).then(res => {
      sh(res)
    }).catch(err => {
      if (eh) eh(err)
    })
  },
  post: function(url, Da, sh, eh) {
    service({
      method: 'post',
      url: url,
      data: Da
    }).then(res => {
      sh(res)
    }).catch(err => {
      if (eh) eh(err)
    })
  }
}

export default ret
