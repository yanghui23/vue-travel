<template>
  <div id="app">
    <keep-alive>
      <!-- 当前路由所对应的组件: 例如当前路由为 /list , 那么对应的组件就是 list/List.vue -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
