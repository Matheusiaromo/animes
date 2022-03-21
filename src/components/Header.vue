<template>
  <div class="fundo-header">
    <header class="container">
    <div class="logo">
      <h1>AnimesMatheus</h1>
    </div>
    <nav>
      <ul>
        <router-link to="/" class="link-nav">Home</router-link>
        <router-link to="/a" class="link-nav">Animes</router-link>
        <router-link to="/b" class="link-nav">Generos</router-link>
        <router-link to="/c" class="link-nav">Contato</router-link>
      </ul>
    </nav>
    <div class="search">
      <input type="text" placeholder="Buscar...">
    </div>
    
  </header>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>

header {
  display: flex;
  flex-direction: row;
 
  justify-content: space-between;
  color: #fff;
  align-items: center;
}

header ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

header ul .link-nav {
  padding: 20px 10px;
  font-weight: bold;
  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;
  text-decoration: none;
  color: #fff;
}

header ul .link-nav:hover {
  border-bottom: 3px solid tomato;
}

.fundo-header {
  background: #000;
   border-bottom: 1px solid grey;
}

.container {
  padding: 10px 20px;
}

.search input {
  font-size: 16px;
  padding: 5px;
}

.router-link-active .router-link-exact-active .link-nav {
  color: tomato;
}
</style>