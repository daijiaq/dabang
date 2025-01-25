export const __PROD__ = import.meta.env.PROD

const productionBaseUrl = 'xxxxxx'
const developmentBaseUrl = 'xxxxxxx'

export const __BASE_URL__ = __PROD__ ? productionBaseUrl : developmentBaseUrl

export const __API_TIMEOUT__ = 10000
//http://47.121.198.19:8888