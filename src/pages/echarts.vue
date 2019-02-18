<template>
  <div class="echarts-list">
    <div id="echarts"></div>
    <canvas id="drawing" width="200" height="200"></canvas>
    <canvas id="webgl" width="200" height="200"></canvas>
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
    this.canvasDom()
  },
  methods: {
    canvasDom () {
      let drawing = document.getElementById('drawing')
      if (drawing.getContext) {
        let context = drawing.getContext('2d')
        context.strokeStyle = '#ff0000'
        context.strokeRect(10, 10, 50, 50)
        context.strokeStyle = 'rgba(0,0,255,.5)'
        context.strokeRect(30, 30, 50, 50)
      }
    },
    webGL1 () {
      let webgl = document.getElementById('webgl')
      if (webgl.getContext) {
        let gl = webgl.getContext('experimental-webgl')
        if (gl) {
          let vertices = new Float32Array([0, 1, 1, -1, -1, -1])
          let buffer = gl.createBuffer()
          let vertexSetSize = 2
          let vertextSetCount = vertices.length / vertexSetSize
          let uColor
          let aVertextPosition
          let program = gl.createProgram()
          gl.bindBuffer(gl.ARRAY._BUFFER, buffer)
          gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC.DRAW)
          uColor = gl.getUniformLocation(program, 'uColor')
          gl.uniformn4fv(uColor, [0, 0, 0, 1])
          aVertextPosition = gl.getAtrribLocation(program, 'aVertextPosition')
          gl.enableVertexAtrribArray(aVertextPosition)
          gl.vertexAtrribPointer(aVertextPosition, vertexSetSize, gl.FLOAT, false, 0, 0)
          gl.drawArrays(gl.TRIANGLES, 0, vertextSetCount)
        }
      }
    },
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
