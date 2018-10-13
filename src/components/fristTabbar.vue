<template>
  <div class="frist-tabbar">
    <ul v-for="(item, index) in tabbarText" :key="index" class="fl clear" :style="{width: ((100 / tabbarText.length) + '%'), height: '100%'}">
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
  watch: {}
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
