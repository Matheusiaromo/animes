<template>
  <div class="container">

    <div>
      <div class="titulo-lermais">
        <h1>Ultimos animes</h1>
        <a href="#">Ver mais</a>
      </div>
      <div class="card-list">
      <div v-for="(card, index) in data.documents" :key="index">
          <Card :title="card.titles.en" 
                :url="card.cover_image" 
                :description="card.descriptions.en" />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import { api } from "../services.js"  
export default {
  name: "Card.vue",
  data(){
    return {
      data: [],
      perPage: 5
    }
  },
  methods: {
    getAll(){
      return api.get("/v1/anime?per_page=" + this.perPage)
      .then( response => {
        console.log(response.data.data);
          this.data = response.data.data
        }
      ).catch(err => {
        console.log(err)
      })
    }
  },
  components: {
    Card
  },
  mounted() {
    this.getAll()
  },
}
</script>

<style>

.card-list {
  display: flex;
  flex-direction: row;
  gap: 10px;
  background: #000;
  padding: 20px;
}

.titulo-lermais {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
}

.titulo-lermais a {
  padding: 6px 10px;
  border-radius: 20px;
  color: #fff;
  background: tomato;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
}

.titulo-lermais h1 {
  color: #fff;
  font-size: 24px;
  padding-left: 10px;
  border-left: 4px solid tomato;
}

</style>