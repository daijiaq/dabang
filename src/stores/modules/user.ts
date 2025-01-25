import type { IUser } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// ���� Store
export const useUserStore = defineStore(
  'user',
  () => {
    // �û���Ϣ
    const userInfo = ref<IUser>()

    const setUserToken = (token: string) => {
      uni.setStorageSync('token', token)
    }

    // �ǵ� return
    return {
      userInfo,
      setUserToken
    }
  },
  // TODO: �־û�
  {
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync('key', value)
        }
      }
    }
  }
)
