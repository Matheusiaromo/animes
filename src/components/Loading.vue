<template>
  <div>
    <span>Carregando</span>
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped>

div {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: #000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

div span {
  color: #fff;
}

</style>