import { createPinia } from "pinia";
import persist from "pinia-plugin-persistedstate";

// ���� pinia ʵ��
const pinia = createPinia();
// ʹ�ó־û��洢���
pinia.use(persist);

// Ĭ�ϵ������� main.ts ʹ��
export default pinia;

// ģ��ͳһ����
export * from "./modules/user";
