<template>
  <div>
    <div v-if="data">
      <div class="container">
        <div class="banner-title">
          <div class="banner">
            <img :src="data.cover_image" alt="" />
          </div>
          <div class="title">
            <h1 class="title-anime">{{ data.titles.en }}</h1>
            <span class="year">{{ data.season_year }}</span>
            <hr />
            <div class="score">
              <span class="star"
                ><MdiSvg class="star">{{ mdiStar }} </MdiSvg></span
              ><span>{{ data.score }}</span>
            </div>
            <hr />
            <ul class="categorias">
              <li v-for="(categoria, index) in data.genres" :key="index">
                {{ categoria }}
              </li>
            </ul>
          </div>
        </div>
        <div class="description">
          <p v-html="data.descriptions.en"></p>
        </div>
      </div>
    </div>
    <div v-else class="loading">
      <Loading />
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
      loading: false,
      mdiStar: mdiStar,
    };
  },
  methods: {
    getAnime() {
      this.loading = true;
      api
        .get(`/v1/anime/${this.$route.params.id}`)
        .then((response) => {
          this.data = response.data.data;
          this.loading = false;
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.getAnime();
  },
};
</script>

<style scoped>
img {
  width: 220px;
}

.banner-title {
  display: flex;
}

.container {
  padding: 20px;
}

.star {
  color: yellow;
}

.banner-title .title {
  padding: 0px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  text-align: start;
  color: #fff;
  gap: 15px;
}

.banner-title .categorias {
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  list-style: none;
}

.banner-title .categorias li {
  background: grey;
  color: #fff;
  padding: 5px;
}

.description p {
  color: #fff;
  text-align: start;
  padding-top: 10px;
}

.score {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}

.score span {
  font-size: 18px;
  vertical-align: baseline;
}
</style>