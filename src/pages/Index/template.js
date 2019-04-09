import request from '@/helpers/request.js'
import auth from '@/api/auth.js'
window.request = request

export default {
    name: 'login',
    props: {
      msg: String
    },
    methods:{
      onClick1() {
        this.$message.error('这是一条错误信息')
      }
    }

  }