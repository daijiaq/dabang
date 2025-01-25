/**
 * 用户信息
 */
export interface IUser {
    /**
      * 账号
      */
     account: string
     /**
      * token
      */
     token: string
     /**
      * 用户id
      */
     userId: number
    
  
  }
  
  
  export interface ILogin{
     /**
     * 账号
     */
     account: string
     /**
      * 密码
      */
     password: any
    
  }