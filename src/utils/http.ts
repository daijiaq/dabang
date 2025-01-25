import { useUserStore } from '@/stores/modules/user'
import { __BASE_URL__, __API_TIMEOUT__ } from '@/constant'
import type { IData } from '../types/baseType'

//���������
const httpInterceptor = {
  //����ǰ����
  invoke(option: UniApp.RequestOptions) {
    if (!option.url.startsWith('http')) {
      option.url = __BASE_URL__ + option.url
    }
    option.timeout = __API_TIMEOUT__
    const token = uni.getStorageSync('token')
    // ȡ token ��Ȼ��������ͷ��t
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

//��װ��������
export const http = <T>(Option: UniApp.RequestOptions) => {
  return new Promise<IData<T>>((resolve, reject) => {
    uni.request({
      ...Option,
      //����ɹ�
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as IData<T>)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as IData<T>).msg || '�������'
          })
          reject(res)
        }
      },
      //��Ӧʧ��
      fail(err) {
        reject(err)
        uni.showToast({
          icon: 'none',
          title: '������󣬻�����������~'
        })
      }
    })
  })
}

//��װ�ϴ�����
export const httpUpLoad = <T>(Option: UniApp.UploadFileOption) => {
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      ...Option,
      //����ɹ�
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else {
          uni.showToast({
            icon: 'none',
            title: res.data || '�������'
          })
          reject(res)
        }
      },
      //��Ӧʧ��
      fail(err) {
        reject(err)
        uni.showToast({
          icon: 'none',
          title: '������󣬻�����������~'
        })
      }
    })
  })
}
