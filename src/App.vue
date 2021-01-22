<template>
  <div id="app">
    
      <MyNavBar/>
    <router-view/>
  </div>
</template>

<script>
import MyNavBar from "@/components/NavBar.vue"

export default {
  name: 'app',
  components: {
    MyNavBar
  }
}
</script>