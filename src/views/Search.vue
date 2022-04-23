<template>
  <div>
    <div v-if="data">
      <div v-for="(anime, i) in data" :key="i">
        <pre>
          Titulo: {{ anime.titles.en }}
          <br> Episodios: {{anime.episodes_count}}
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiStar } from "@mdi/js";
import { api } from "@/services.js";

export default {
  name: "SinglePost",
  data() {
    return {
      data: null,
      search: "",
      loading: false,
      mdiStar: mdiStar,
    };
  },
  methods: {
    getPesquisa() {
      this.loading = true;
      this.search = this.$route.params.pesquisa;
      api
        .get(`/v1/anime?title=${this.search}`)
        .then((response) => {
          this.data = response.data.data.documents;
          console.log(this.data);
          this.loading = false;
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.getPesquisa();
  },
};
</script>

<style scoped>
div {
  color: #fff;
  text-align: left;
}
</style>