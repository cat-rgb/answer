<template>
  <div>
    <Item father = "home"></Item>
      <!-- <div class="home">
        <div class="detail"></div>
        <div class="num">
        </div>
            <router-link :to="{path:'/answer'}">
                <div class="begin"></div>
            </router-link>
      </div> -->
  </div>
</template>

<script>
import  Item from '../components/item.vue'
export default {
  components:{Item}
}
</script>

<style scoped>

</style>