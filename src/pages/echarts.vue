<template>
  <div class="echarts-list">
    <div id="echarts"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      city: ''
    }
  },
  mounted () {
    this.bar()
  },
  methods: {
    globe () {
    },
    bar () {
      let bar = echarts.init(document.getElementById('echarts'))
      let option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      bar.setOption(option)
    },
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
    }
  }
}
</script>

<style>
#echarts {
  width: 100%;
  height: 500px;
}
</style>
