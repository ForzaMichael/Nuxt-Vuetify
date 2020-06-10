interface UserInfo {
  id: string
  username: string
  email: string
  address?: {
    street: string
  }
  phone?: string
  website?: string
}
