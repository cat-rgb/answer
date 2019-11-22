<template>
  <div>
      <Item father = "defen"></Item>
  </div>
</template>

<script>
import Item from "../components/item"
export default {
  components:{Item},
  data(){
    return{
      score:0,
      rigthId:[2,7,12,13,18]
    }
  }
}
</script>

<style scoped>
.defen{
  width: 300px;
    height: 500px;
    background: url(../assets/4-1.jpg) no-repeat;
    background-size: 100% 100%;               
    margin: 0 auto;         
    position: relative;
}
</style>