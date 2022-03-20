<template>

  <div class="card">
    <div class="img">
      <img :src="url">
    </div>
    <div class="content">
      <h3 class="title" v-html="title"></h3>
    </div>
  </div>

</template>

<script scoped>
export default {
  name: "Card.vue",
  props: ["url", "title", "description"],
}
</script>

<style>

.card {
  width: 200px;
  height: 100%;
}
.card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 5px;
}
.card .title {
  text-align: start;
  font-size: 14px;
  margin: 0px;
  overflow: hidden;
  text-overflow: ellipsis; 
  display: -webkit-box;
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical; 
  padding-top: 5px;
  color: #fff;
}


</style>