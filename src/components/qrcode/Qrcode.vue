<template>
  <canvas ref="qrcode" class="qrcode"></canvas>
</template>

<script>
import QRCode from 'qrcode'

export default {
  name: 'FgQrcode',
  props: {
    text: {
      type: String,
      default: 'fg',
    },
  },
  watch: {
    text: {
      immediate: true,
      handler() {
        this.text && this.$nextTick().then(() => this.qrcode(this.text))
      },
    },
  },

  methods: {
    qrcode(text) {
      const dom = this.$refs['qrcode']
      QRCode.toCanvas(dom, text, function(error) {
        if (error) console.error(error)
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.qrcode {
  height: 100% !important;
  width: 100% !important;
}
</style>
