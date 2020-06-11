import { computed } from '@vue/composition-api'
import { loginStore } from '~/store'
export function useUserName() {
  const userName = computed(() => {
    return loginStore.user.username
      ? 'Hello,' + loginStore.user.username + ' ! '
      : 'Login'
  })
  return userName
}
