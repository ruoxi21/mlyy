<template>
  <div class='img-mask' v-show="isShowImgMask" @click="hideImgMask">
    <img class="img-mask__img mask_img" :src="imgUrl" alt="ruoxiyy_{}-cx">
  </div>
</template>

<script>
  export default {
    name: 'ImgMask',
    props: {
      imgUrl: {
        type: String,
        default: '/static/imgs/21325ILOVEU.jpg'
      },
      isShowImgMask: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      hideImgMask(){
        this.$emit('changeShow', false)
      }
    },
  }
</script>
<style lang="scss" scoped>
.img-mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 21325;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(21, 21, 21, .325);
  transition: all 0.5s ease-in-out;
  &__img {
    max-width: 100vw;
    max-height: 100vh;
  }
}
</style>
