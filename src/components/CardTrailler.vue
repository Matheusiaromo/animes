<template>

  <div class="cardTrailler">
    <div class="img">
      <img :src="url">
      <span class="genero">{{genero}}</span>
    </div>
    <div class="content">
      <h3 class="title" v-html="title"></h3>
    </div>
    
  </div>

</template>

<script>
export default {
  name: "cardTrailler.vue",
  props: ["url", "title", "genero"],
}
</script>

<style scoped>

.cardTrailler {
}

.cardTrailler img {
  border-radius: 5px;
  width: 100%;
  height: 220px;
  object-fit: cover;
  background: center center;
}
.cardTrailler .img {
   position: relative;
}
.cardTrailler .title {
  text-align: start;
  font-size: 14px;
  margin: 0px;
  overflow: hidden;
  text-overflow: ellipsis; 
  display: -webkit-box;
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical; 
  padding-top: 8px;
  color: #fff;
}

.cardTrailler .genero {
  position: absolute;
  padding: 5px;
  font-size: 12px;
  color: #fff;
  bottom: 4px;
  right: 0;
  background: tomato;
  border-radius: 5px 0px 5px 0px;
} 

</style>