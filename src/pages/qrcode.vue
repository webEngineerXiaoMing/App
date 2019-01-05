<template>
    <div class="qrcode">
        <div id='code'>1111</div>
        <canvas id="canvas"></canvas>
    </div>
</template>
<script>
import QRCode from 'qrcode'
export default {
  data () {
    return {
      codes: ''
    }
  },
  components: {
    QRCode: QRCode
  },
  methods: {
    useqrcode () {
      let canvas = document.getElementById('canvas')
      QRCode.toCanvas(canvas, 'http://www.baidu.com', function (error) {
        if (error) console.error(error)
        console.log('success!')
      })
    }
  },
  mounted () {
    this.useqrcode()
  }
}
</script>

<style>
.qrcode #canvas {
    width: 300px;
    height: 300px;
}
</style>
