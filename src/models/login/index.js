import {login} from '../../services/login'

export default {
  namespace: 'login',
  state: {
    loginData: {}
  },
  effects: {
    *login({payload}, {put, call, select}) {
      const data = yield call(login, payload) 
      console.log('data---', data)
    }
  }
}