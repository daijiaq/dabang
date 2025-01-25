import { useUserStore } from '@/stores/modules/user'
import { __BASE_URL__, __API_TIMEOUT__ } from '@/constant'
import type { IData } from '../types/baseType'

//添加拦截器
const httpInterceptor = {
  //拦截前触发
  invoke(option: UniApp.RequestOptions) {
    if (!option.url.startsWith('http')) {
      option.url = __BASE_URL__ + option.url
    }
    option.timeout = __API_TIMEOUT__
    const token = uni.getStorageSync('token')
    // 取 token ，然后附在请求头上t
    if (token) {
      option.header = {
        ...option.header,
        token: token
      }
    }
  }
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

//封装网络请求
export const http = <T>(Option: UniApp.RequestOptions) => {
  return new Promise<IData<T>>((resolve, reject) => {
    uni.request({
      ...Option,
      //请求成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as IData<T>)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as IData<T>).msg || '请求错误'
          })
          reject(res)
        }
      },
      //响应失败
      fail(err) {
        reject(err)
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试~'
        })
      }
    })
  })
}

//封装上传请求
export const httpUpLoad = <T>(Option: UniApp.UploadFileOption) => {
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      ...Option,
      //请求成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else {
          uni.showToast({
            icon: 'none',
            title: res.data || '请求错误'
          })
          reject(res)
        }
      },
      //响应失败
      fail(err) {
        reject(err)
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试~'
        })
      }
    })
  })
}
