<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <div class="container">
      <div class="main" v-if="data">
        <div class="bloco divisor">
          <HeaderCard title="Ultimos animes" endpoint="ultimos" />
          <div class="card-list">
            <div v-for="(card, index) in data.documents" :key="index">
              <router-link :to="{ name: 'anime', params: { id: card.id } }">
                <Card :title="card.titles.en" :url="card.cover_image" />
              </router-link>
            </div>
          </div>
        </div>
        <div class="bloco">
          <HeaderCard title="Traillers" endpoint="traillers" />
          <div class="trailler-list">
            <div v-for="(card, index) in data.documents" :key="index">
              <router-link :to="{ name: 'anime', params: { id: card.id } }">
                <CardTrailler
                  :title="card.titles.en"
                  :url="card.banner_image"
                  :description="card.descriptions.en"
                  :genero="card.genres[0]"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="aside">
        <div class="populares"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import CardTrailler from "@/components/CardTrailler.vue";
import HeaderCard from "@/components/HeaderCard.vue";
import { api } from "../services.js";

export default {
  name: "Card.vue",
  data() {
    return {
      data: [],
      perPageAnime: 10,
      loading: false,
    };
  },
  methods: {
    getAll() {
      this.loading = true;
      return api
        .get("/v1/anime?per_page=" + this.perPageAnime)
        .then((response) => {
          console.log(response.data.data);
          this.data = response.data.data;
          this.loading = false;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  components: {
    Card,
    CardTrailler,
    HeaderCard,
  },
  mounted() {
    this.getAll();
  },
};
</script>

<style>
.container {
  background: #000;
  padding: 20px 0px;
}

.bloco {
  padding: 20px;
}

.card-list {
  display: flex;
  flex-direction: row;
  gap: 15px;
  background: #000;
  overflow-x: auto;
  overflow-y: hidden;
}

.trailler-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.card-list::-webkit-scrollbar {
  display: none;
}

.divisor {
  border-bottom: 1px solid #333;
}
</style>