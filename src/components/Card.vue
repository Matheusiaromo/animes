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

<script>
export default {
  name: "Card.vue",
  props: ["url", "title", "description"],
}
</script>

<style>

.card {
  width: 150px;
  border-radius: 10px;
  height: 100%;
}
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card .title{
  text-align: start;
  font-size: 14px;
  margin: 0px;
  overflow: hidden;
  text-overflow: ellipsis; 
  display: -webkit-box;
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical; 
  padding-top: 3px;
  color: #fff;
}


</style>