<template>
  <div id="app">
    <keep-alive> <!-- 这个代码意思路由加载过一次就把路由内容放在内存，再进来路由就不用再次加载 -->
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

</style>
