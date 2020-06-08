export interface UserInfo {
  name: string
  email: string
}
interface TestUser {
  (userInfo: UserInfo[]): UserInfo
}
