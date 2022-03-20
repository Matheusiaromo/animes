<template>
    
    <div>
      <div v-if="loading" class="loading">
        <Loading />
      </div>
      <div>
      <div class="container">
        <div class="banner-title">
          <div class="banner">
            <img :src="data.cover_image" alt="">
          </div>
          <div class="title">
            <!-- <h1 class="title-anime">{{data.titles.en}}</h1> -->
            <span class="year">{{data.season_year}}</span>
            <hr>
             <span class="score">{{data.score}}</span>
            <hr>
            <div>
              <ul v-for="(categoria, index) in data.genres" :key="index" class="categorias">
                <span>{{categoria}}</span>
              </ul>
            </div>
          </div> 
        </div>
        <div>
        <!-- <p v-html="data.description.en"></p> -->
        </div>
      </div>
    </div>
    </div>

</template>

<script>

import { api } from "@/services.js"

export default {
  name: "SinglePost",
  data() {
    return {
      data: [],
      loading: false
    }
  },
  methods: {
   getAnime(){
      this.loading = true
      api.get(`/v1/anime/${this.$route.params.id}`)
      .then(response => {
        this.data = response.data.data
        this.loading = false
      }).catch(error => console.log(error))  
    }
  },
  created() {
    this.getAnime()
  },
}
</script>

<style scoped>
img {
  width: 220px;
}

.banner-title {
  display: flex;
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
  list-style: none;
  display: inline;
}

.banner-title .categorias span {
  color: grey;
  font-size: 12px;
  padding: 5px;
  background: #000;
  margin: 4px;
}

</style>