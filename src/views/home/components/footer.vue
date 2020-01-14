<template>
  <div class='h-footer'>
    MIT Licensed | Copyright © 2017-present ruoxi21325 | Just for MyLvYY
    <div class="heart-xy">
      <div class="wrap">
        <div class="heart rm-10px"></div>
        <div class="heart"></div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
  .h-footer {
    padding: 2.5rem;
    color: #4e6e8e;
    text-align: center;
    border-top: 1px solid #eaecef;
    .heart-xy {
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
  }
</style>
