<template>
  <div class="echarts-list">
    echarts
    <el-input type="password" v-model="pwd" placeholder="请输入密码"></el-input>
    <el-button @click="apiClick">api-axios</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pwd: ''
    }
  },
  methods: {
    apiClick () {
      let params = {
        LoginForm: {
          email: '15900000002',
          rememberMe: '1',
          password: this.pwd
        }
      }
      this.$axios.post('user/admin/loginn', params)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
