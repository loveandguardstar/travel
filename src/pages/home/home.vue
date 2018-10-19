<template>
    <div>
      <div class="hello">hello</div>
      <router-link to="/list" class="hello">列表</router-link>
    </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
  .hello {
    font-size: 20px;
  }
</style>
