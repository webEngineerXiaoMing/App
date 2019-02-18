<template>
  <!--同步设置id传送给子组件-->
  <g2-line :charData="serverData"  id="c1"></g2-line>
</template>
<script>
import G2Line from '../pages/g2Line'
export default {
  data () {
    return {
      serverData: [
        {'mzkId': 112, 'strftime': '2017-01-11', 'value': 9275501}, // 测试数据，根据自己需求自己设置数据
        {'mzkId': 112, 'strftime': '2017-01-12', 'value': 9281904},
        {'mzkId': 112, 'strftime': '2017-01-13', 'value': 9290777},
        {'mzkId': 112, 'strftime': '2017-01-14', 'value': 9297913},
        {'mzkId': 112, 'strftime': '2017-01-15', 'value': 9306918},
        {'mzkId': 112, 'strftime': '2017-01-16', 'value': 9315641}
      ]
    }
  },
  components: {
    G2Line
  },
  methods: {}
}
</script>
