<template>
  <div id="toStarluxeCommodity">
    <img src="./commodity.jpg" alt="" class='commodityImg'>
  </div>
</template>
<script>
  export default {
    name: 'toStarluxeCommodity'
  }
</script>
<style>
  #toStarluxeCommodity {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px;
    margin: 30px;
    background-color: #fff;
    overflow-y: auto;
  }
  #toStarluxeCommodity .commodityImg {
    height: 600px;
    width: 600px;
  }
</style>
