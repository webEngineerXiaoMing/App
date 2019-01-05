<template>
    <div class="frist-header">
        <tabbar :tabbarText="tabbarText" @tabToLink='tabToLink'></tabbar>
        <!-- <keep-alive> -->
          <!-- <transition> -->
            <router-view></router-view>
          <!-- </transition> -->
        <!-- </keep-alive> -->
    </div>
</template>
<script>
import Tabbar from '@/components/fristTabbar'
export default {
  name: 'fristHeader',
  components: {
    Tabbar
  },
  data () {
    return {
      tabbarText: ['图表', '列表', '富文本', '列表拖拽', '侧拉框', '二维码']
    }
  },
  methods: {
    tabToLink (key) {
      switch (key.trim()) {
        case '图表':
          this.$router.push('/header')
          break
        case '二维码':
          this.$router.push('/header/qrcode')
          break
        case '富文本':
          this.$router.push('/header/quillEditor')
          break
        case '列表拖拽':
          this.$router.push('/header/drag')
          break
      }
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.frist-header .frist-tabbar {
  width: 100%;
  height: 60px;
  color: #fff;
  background-color: #303133;
}
.frist-header .frist-tabbar  ul:hover {
  color: #303133;
  background-color: #fff;
}
</style>
