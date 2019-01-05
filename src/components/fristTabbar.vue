<template>
  <div class="frist-tabbar">
    <ul v-for="item in tabbarText" :key="item" class="fl clear" :style="{width: ((100 / tabbarText.length) + '%'), height: '100%'}" @click='tabToLink(item)'>
        <li :class='{active:(activeTxt===item)}' >{{item}}</li>
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
    return {
      activeTxt: this.tabbarText[0]
    }
  },
  watch: {},
  methods: {
    tabToLink (key) {
      console.log('key', key)
      this.activeTxt = key
      this.$emit('tabToLink', key)
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
.active {
  color: #303030;
  background-color: #fff;
}
</style>
