import request from '@/helpers/request.js'
import auth from '@/api/auth.js'

window.request = request
window.auth = auth

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onClick1() {
      this.$message('这是一条消息提示');
    }
  }
}