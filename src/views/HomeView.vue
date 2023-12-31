<template>
  <div class="home">
    <h1>This is A Home View</h1>
    <h2>Your Name is : {{this.$store.state.name }}</h2>
    <h2>Your age is : {{ this.$store.state.age }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
  },
  data(){
    return{
      age:25,
      name:"SHB"
    }
  },
  mounted(){
    console.log('LOG IS',this.$store.state.data)
  }
}
</script>
