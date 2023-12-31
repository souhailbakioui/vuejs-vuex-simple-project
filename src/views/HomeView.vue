<template>
  <div class="home">
    <h1>This is A Home View</h1>
    <h1>{{this.$store.getters.nameWithTitle }}</h1>

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
