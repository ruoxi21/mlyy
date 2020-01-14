<template>
  <div class="home">
    <h-header />
    <h-process />
    <h-section />
    <h-footer />
  </div>
</template>

<script>
import hHeader from './components/header'
import hProcess from './components/process'
import hSection from './components/section'
import hFooter from './components/footer'
export default {
  name: 'home',
  components: {
    hHeader,
    hProcess,
    hSection,
    hFooter
  }
}
</script>