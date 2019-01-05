<template>
  <div class="frist-tabbar">
    <ul v-for="item in tabbarText" :key="item" class="fl clear" :style="{width: ((100 / tabbarText.length) + '%'), height: '100%'}" @click='tabToLink(item)'>
        <li>{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tabbarText: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  watch: {},
  methods: {
    tabToLink (key) {
      console.log('key', key)
      switch (key.trim()) {
        case '图表':
          this.$router.push('/header')
          break
        case '二维码':
          this.$router.push('/header/qrcode')
      }
    }
  }
}
</script>

<style>
.frist-tabbar {
  /* width: 100%; */
  height: 60px;
  overflow: hidden;
}
.frist-tabbar>ul {
  line-height: 60px;
}
</style>
