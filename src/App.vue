<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  created() {
    // const whiteUrl = [ '/login', '/book/home/v2' ]
    const whiteUrl = ['/login']
    const url = '/book/home/v2'
    const request = axios.create({
      baseURL: 'https://test.youbaobao.xyz:18081',
      timeout: 5000
    })
    // 请求拦截器
    request.interceptors.request.use(
      config => {
        console.log(config)
        const url = config.url.replace(config.baseURL, '')
        if (whiteUrl.some(wl => url === wl)) {
          return config
        }
        // throw new Error('aaa')
        config.headers['token'] = 'abcd'
        return config
      },
      err => {
        console.log(err)
        Promise.reject(err)
      }
    )
    // 响应拦截器
    request.interceptors.response.use(
      response => {
        console.log('response', response)
        if (response.data && response.data.error_code === 0) {
          return response.data.data
        } else {
          alert(response.data.msg)
          Promise.reject(response.data.msg)
        }
      },
      err => {
        Promise.reject(err)
      }
    )
    request({
      url,
      methods: 'get',
      params: {
        openId: 1234
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
