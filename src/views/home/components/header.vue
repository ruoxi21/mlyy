<template>
  <div class="h-header fixed">
    <i class="marry marryyou"></i>
    <div class="title">MLYY -- 伴着你的精神食粮</div>
    <i class="marry marryme"></i>
    <!-- 进度条 -->
    <div id="site-process" style="width: 21.325%;"></div>
  </div>
</template>
<script>
  import('./scroll')
  export default {
    
}
</script>

<style lang="scss" scoped>

.fixed {
  position: fixed;
  top: 0;
  z-index: 21325;
}
.h-header {
  width: 100%;
  height: 60px;
  background: -webkit-linear-gradient(325deg, #FF0080, #ff4b01, #E02AFF);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(325deg, #FF0080, #ff4b01, #E02AFF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  transition: all .3s;
  .title {
    line-height: 60px;
    font-size: 18px;
    text-align: center;
    color: #fff;
  }
  .marryyou {
    background: url(http://q45sz7cpm.bkt.clouddn.com//post/img/marryyou-wx201909251649.jpg) no-repeat center;
    background-size: cover; /* 需放在background:url() 下方, 放上方无效 先有图才能设置大小?,,,*/
    left: 21px;
  }
  .marryme {
    background: url(http://q45sz7cpm.bkt.clouddn.com//post/img/marryme-wx201909251649.jpg) no-repeat center;
    background-size: cover;
    right: 21px;
  }
  .marry {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
  }
  
  i.marry:hover {
    transform: rotate(666turn);
    transition-delay: 1s;
    transition-property: all;
    transition-duration: 59s;
    transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
  }

  // 进度条
  #site-process {
    width: 0;
    height: 2px;
    position: fixed;
    left: 0;
    top: 59px;
    background: #42a5f5;
    z-index: 300;
  }
}
</style>