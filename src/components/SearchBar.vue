<template>
  <div class="search">
    <input type="text" placeholder="Buscar..." v-model="search" />
    <input type="button" @click="pesquisar" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    pesquisar() {
      this.$router.push({ name: "search", params: { pesquisa: this.search } });
    },
  },
};
</script>

<style scoped>
.search input {
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
}
</style>