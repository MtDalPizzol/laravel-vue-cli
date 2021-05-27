<template>
  <div id="app">
    <Page />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Page: () => import('@/pages/' + window.app.page.component + '.vue')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
