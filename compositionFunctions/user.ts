import { computed } from '@vue/composition-api'
import { loginStore } from '~/store'
export function useUserName() {
  const userName = computed(() => {
    return loginStore.user.name
      ? 'Hello,' + loginStore.user.name + ' ! '
      : 'Login'
  })
  return userName
}
