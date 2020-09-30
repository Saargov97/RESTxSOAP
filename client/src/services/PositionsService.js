import Api from '@/services/Api'

export default {
  index () {
    return Api().get('position')
  },
  post (position) {
    return Api().post('position', position)
  }
}
