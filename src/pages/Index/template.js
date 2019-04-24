import blog from '@/api/blog.js'

export default {
    data() {
      return{
        blogs:[]
      }
    },
    creeated() {
      blog.getIndexBlogs().then(res => {
        this.blogs = res.data
      })
    },
    methods:{
      
    }

  }