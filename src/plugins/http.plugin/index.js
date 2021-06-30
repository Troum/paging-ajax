/* eslint-disable no-prototype-builtins */
import axios from 'axios'
import store from '../../store'
import router from "../../router";

const $http = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  },
  withCredentials: false,
  crossDomain: true,
  params: {}
})

$http.interceptors.request.use(request => {
  if (request.url.includes('auth')) {
    request.headers.Authorization = `Bearer ${store.getters.GET_TOKEN}`
  }
  return request
})

$http.interceptors.response.use(response => {

  if (response.data.hasOwnProperty('success')) {
    store.dispatch('setResponse', { status: true, type: 'success', message: response.data.success }).catch()
  }
  if (response.data.hasOwnProperty('access_token')) {
    store.dispatch('setToken', response.data.access_token).then(() => {
      router.push({ name: 'dashboard' }).then(() => {
        $http.get('/auth/user')
            .then( response => {
              store.dispatch('setUser', response.data.user)
                  .then(() => {
                    router.push({name: 'dashboard'}).catch()
                  })
            })
      })
    })
  }
  return response
}, error => {
  console.log(error)
  switch (error.response.status) {
    case 400:
      store.dispatch('setResponse', { status: true, type: 'error', message: error.response.data.error }).catch()
      break
    case 401:
      store.dispatch('setResponse', { status: true, type: 'error', message: error.response.data.error }).catch()
      break
    default:
      break
  }
})

const Http = {
  install (Vue) {
    Vue.prototype.$http = $http
  }
}

export default (Http)
