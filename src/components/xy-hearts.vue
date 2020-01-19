<template>
  <div class='xy-hearts'>
    <div class="wrap">
      <div class="heart rm-10px"></div>
      <div class="heart"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'xyHearts',
  }
</script>
<style lang="scss" scoped>
  .xy-hearts {
    height: 21px;
    padding-top: 21px;
    display: flex;
    justify-content: center;
    .heart {
      width: 10px;
      height: 10px;
      position: absolute;
      background: #f00;
      transform: rotate(45deg);
      &:after,
      &:before {
        content: '';
        width: inherit;
        height: inherit;
        background: inherit;
        border-radius: 50%;
        position: absolute;
      }
      &:before{
        left: -5px;
      }
      &:after{
        top: -5px;
        left: 0;
      }
    }
    .rm-10px {
      margin-left: -10px;
    }
  }
</style>
