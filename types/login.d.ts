interface UserInfo {
  name: string
  id: number
  level: number
}
interface TestUser {
  (userInfo: UserInfo[]): UserInfo
}
