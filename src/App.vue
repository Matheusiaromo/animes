<template>
  <div>
      <Header />
      <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
export default {
  name: 'App',
  components: {
    Header
  }

}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #1B1B1C;
  margin: 0px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}
</style>
