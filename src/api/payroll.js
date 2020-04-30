import http from '@/utils/http'

export function fetchSomething (data, config) {
  const url = '/fetch'
  return http.post(url, data, config)
}
