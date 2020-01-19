<template>
  <div class='h-footer'>
    MIT Licensed | Copyright © 2017-present ruoxi21325 | Just for MyLvYY
    <xy-hearts />
  </div>
</template>
<script>
import xyHearts from 'components/xy-hearts.vue'
export default {
  name: 'xyFooter',
  components: { xyHearts }
}
</script>

<style lang='scss' scoped>
  .h-footer {
    padding: 2.5rem;
    color: #4e6e8e;
    text-align: center;
    border-top: 1px solid #eaecef;
  }
</style>
