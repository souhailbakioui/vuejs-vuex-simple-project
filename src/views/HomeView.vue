<template>
  <div class="home">
    <h1>This is A Home View</h1>
    <h1>{{this.$store.getters.nameWithTitle }}</h1>
    <button type="button" @click="this.$store.commit('changeTitle')">changeTitle</button>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
  },
  
}
</script>
