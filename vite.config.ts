import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // �����׶�����Դ��ӳ�䣺https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#����������-sourcemap
    sourcemap: process.env.NODE_ENV === 'development'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [uni()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/static/css/uview.theme.scss";'
      }
    }
  }
});
