<template>
  <div class='h-section'>
    <header class="h-section__header"></header>
    <p class="h-section__title">#伴着你的精神食粮</p>

    <div class="h-section__hearts">
      <xy-hearts />
    </div>

    <section class="h-section__section">
      <div class="article"
           v-for="(item, index) in LOVE"
           :key="index">

        <div class="content" 
             v-for="(c, i) in item.content"
             :key="i">
          <!-- 文字 -->
          <div class="text" 
               v-if="c.type === 'text'"
               v-html="c.text"></div>
          <!-- 图片 -->
          <img v-if="c.type === 'img'"
               @click="showImgMask"
               v-lazy="SOURCE_URL + c.src"
               :key="c.src"
               alt="21ruoxiyy_{}" 
               title="21325">
          <!-- 音频 -->
          <audio class="medias ruoxi-audio"
                 v-if="c.type === 'audio'" 
                 :src="SOURCE_URL + c.src" 
                 type='audio/mp3'
                 :autoplay='c.autoplay'
                 controls
                 name='media'
                 width='213'></audio>
          <!-- 视频 -->
          <video class="medias ruoxi-video"
                 v-if="c.type === 'video'" 
                 :src="SOURCE_URL + c.src"
                 controls
                 preload="none"
                 width="325"></video>
        </div>
        <!-- 时间, 想你 -->
        <div class="create-time" v-if='item.createTime'>
          {{ item.createTime }}
        </div>
      </div>

      <!-- img-mask -->
      <img-mask v-on:changeShow='changeShow'
                :isShowImgMask='isShowImgMask'
                :imgUrl='maskImgSrc' />
    </section>

    <!-- 回顶部 -->
    <div class="back-to-top" style="top: -900px;"><i class="fa fa-arrow-up"></i></div>
  </div>
</template>

<script>
  import { LOVE, SOURCE_URL } from 'consts/love'
  import imgMask from 'components/img-mask'
  import xyHearts from 'components/xy-hearts.vue'
  export default {
    name: 'h-section',
    components: { imgMask, xyHearts },
    data() {
      return {
        SOURCE_URL,
        LOVE,
        isShowImgMask: false,
        maskImgSrc: '/imgs/21325ILOVEU.jpg',
      }
    },
    methods: {
      changeShow(e){
        this.isShowImgMask = e
      },
      showImgMask(e){
        this.maskImgSrc = e.target.src
        
        this.isShowImgMask = !this.isShowImgMask
      }
    },
  }
</script>
<style lang="scss" scoped>
.h-section {
  &__header {
    width: 100%;
    height: 325px;
    text-align: center;
    background-image: url(http://q45sz7cpm.bkt.clouddn.com//post/img/想和你把能发生的关系都发生一遍.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &__title {
    margin: 5px 0;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    color: #5d686f;
  }
  &__hearts {
    cursor: pointer;
  }
  &__section {
    padding: 21px;
    display: flex;
    flex-direction: column;
    .article {
      padding: 21px;
      border-top: 1px solid #ccc;
      .content {
        padding-bottom: 5px;
        .text {
          line-height: 1.7em;
          color: #5d686f;
          font-weight: 400;
          font-family: Merriweather, serif;
        }
        img {
          display: inline-block;
          width: 325px;
        }
      }
      .create-time {
        font-size: 13px;
        color: #b2b2b2;
        font-family: "Open Sans", sans-serif;
      }
    }
  }
  .back-to-top {
    box-sizing: border-box;
    width: 70px;
    height: 900px;
    padding: 0 6px;
    position: fixed;
    right: 50px;
    bottom: -100px;
    z-index: 2;
    opacity: 1;
    cursor: pointer;
    background: url(../../../assets/imgs/scroll.png);
    transition: all 0.5s ease-in-out;
  }
}
</style>
