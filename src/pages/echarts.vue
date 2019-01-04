<template>
  <div class="echarts-list">
    <div id="echarts"></div>
    <el-input v-model="city" placeholder="请输入城市"></el-input>
    <el-button @click="apiClick">百度音乐</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      city: ''
    }
  },
  methods: {
    apiClick () {
      // let params = {
      //   LoginForm: {
      //     email: '15900000002',
      //     rememberMe: '1',
      //     password: this.pwd
      //   }
      // }
      // this.$axios.post('user/admin/loginn', params)
      //   .then(res => {
      //     console.log(res.data)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      this.$axios.get('movie/search?q=神秘巨星&start=0&count=10')
        .then(response => {
          console.log(response.data)
        }).catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
