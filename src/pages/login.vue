<template>
  <div class="login">
    <div class="login-header">
      <div class="fl">
        注册
      </div>
      <div class="fr">
        找回密码
      </div>
    </div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in carousel" :key="index">
        <!-- <div :style="{background:item.url}"></div> -->
        <img :src="item.url" />
      </el-carousel-item>
    </el-carousel>
    <el-form :model="from" ref="from" class="login-from">
      <el-form-item label="账号/邮箱" prop="usrName">
        <el-input type="text" v-model="from.usrName" autocomplete="off" placeholder="admin" @keyup.enter.native="login"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="from.pass" autocomplete="off" placeholder="123456/666666" @keyup.enter.native="login"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登陆</el-button>
        <!-- <el-button @click="resetForm('ruleForm2')">注册或找回密码</el-button>
        <el-button @click="resetForm('ruleForm2')">注册或找回密码</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import FristTabber from '@/components/fristTabbar'
export default {
  data () {
    return {
      from: {
        userName: '',
        pass: ''
      },
      carousel: [
        {
          url: require('../image/one.jpg')
        },
        {
          url: require('../image/two.jpg')
        },
        {
          url: require('../image/third.jpg')
        },
        {
          url: require('../image/four.jpg')
        },
        {
          url: require('../image/five.jpg')
        },
        {
          url: require('../image/six.jpg')
        },
        {
          url: require('../image/seven.jpg')
        },
        {
          url: require('../image/eight.jpg')
        },
        {
          url: require('../image/nine.jpg')
        }
      ]
    //   tabbarText: ['体验登陆', '忘记密码', '注册账号', '注册账号']
    }
  },
  mounted () {},
  computed: {
    getCount () {
      return this.$store.state.count // 到状态库拿东西
    }
  },
  methods: {
    login () {
      console.log(this.getCount)
      if (this.from.usrName === 'admin' && (this.from.pass === '123456' || this.from.pass === '666666')) { // 先前端进行验证
        this.$router.push('/header')
      } else {
        this.$message.error('账号或密码不对')
      }
    }
  }
}
</script>
<style>
.login {
    width: 100%;
    height: auto;
    background-color: #eee;
}
.login .el-carousel {
    height: 640px;
}
.login .login-header {
  width: 100%;
  height: 60px;
  color: #fff;
  box-sizing: border-box;
  line-height: 60px;
  padding: 0 10%;
  background-color: #67C23A;
}
.login .el-carousel .el-carousel__container {
  width: 100%;
  height: 600px!important;
}
.login .login-from {
 width: 500px;
 height: 400px;
 padding: 50px;
 color: #606266;
 box-sizing: border-box;
 z-index: 100;
 position: absolute;
 top: 300px;
 left: 50%;
 transform: translate(-50%,-50%);
 background-color: #efefef;
}
.login .login-from .el-form-item:nth-of-type(3) .el-form-item__content button {
    width: 100%;
    color: #fff;
}
</style>
