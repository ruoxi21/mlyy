<template>
  <div class='test'>
    <div class="test-img-mask">
      <button @click="showImg">显示大图</button>
      <img-mask v-on:changeShow='changeShow' :isShowImgMask='showImgMask' />
    </div>
    
    <div class="test-xy-hearts">
      <xy-hearts />
    </div>
  </div>
</template>

<script>
  import imgMask from 'components/img-mask'
  import xyHearts from 'components/xy-hearts'
  export default {
    name: 'test',
    components: { imgMask, xyHearts },
    data() {
      return {
        showImgMask: false
      }
    },
    methods: {
      changeShow(e){
        this.showImgMask = e
      },
      showImg(){
        this.showImgMask = !this.showImgMask
      }
    },
  }
</script>
<style lang="scss" scoped>

</style>
