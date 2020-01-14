<template>
  <div class='test'>
    <div class="test-img-mask">
      <button @click="showImg">显示大图</button>
      <img-mask v-on:changeShow='changeShow' :isShowImgMask='showImgMask' />
    </div>
  </div>
</template>

<script>
  import imgMask from '../../components/img-mask'
  export default {
    name: 'test',
    components: { imgMask },
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
