<template>
  <div class="titulo-lermais">
          <h1>{{title}}</h1>
          <a :href="endpoint">Ver mais</a>
  </div>
</template>

<script>
export default {
  name: "HeaderCard",
  props: ["title", "endpoint"]

}
</script>

<style>

.titulo-lermais {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
}

.titulo-lermais a {
  padding: 4px 8px;
  border-radius: 20px;
  color: #fff;
  background: tomato;
  font-weight: 600;
  text-decoration: none;
  font-size: 12px;
}

.titulo-lermais h1 {
  color: #fff;
  font-size: 20px;
  padding-left: 10px;
  border-left: 4px solid tomato;
  margin-bottom: 5px;
}

</style>