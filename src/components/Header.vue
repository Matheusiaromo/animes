<template>
  <div class="fundo-header">
    <header class="container">
      <div class="logo">
        <h1>AnimesMatheus</h1>
      </div>
      <nav>
        <ul>
          <router-link to="/">Home</router-link>
          <router-link to="/anime/1">Animes</router-link>
          <router-link to="/anime/2">Generos</router-link>
          <router-link to="/anime/3">Contato</router-link>
        </ul>
      </nav>
      <search-bar></search-bar>
    </header>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
export default {
  name: "Header",
  components: {
    SearchBar
  }
};
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

header ul a {
  padding: 10px 10px;
  font-weight: bold;
  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;
  text-decoration: none;
  margin-top: 10px;
  color: #fff;
}

ul a::after {
  content: "";
  width: 0%;
  background: tomato;
  height: 3px;
  display: block;
  transition: ease-in 0.2s;
  margin-top: 10px;
}

ul a:hover::after {
  content: "";
  width: 100%;
  background: tomato;
  height: 3px;
  display: block;
  transition: ease-out 0.5s;
}

.fundo-header {
  background: #000;
  border-bottom: 1px solid grey;
}

.container {
  padding: 10px 20px;
}

a.router-link-exact-active {
  color: tomato;
}

a.router-link-exact-active::after {
  content: "";
  width: 100%;
  height: 3px;
  background: tomato;
  display: block;
  transition: ease-in 0.2s;
  margin-top: 10px;
}
</style>