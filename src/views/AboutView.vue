<template>
  <div class="about">
    <h1>This is an profil page</h1>
    <h1>{{this.$store.getters.nameWithTitle }}</h1>
    <button type="button" @click="changeTitle">changeTitle</button>
  </div>
</template>

<script>
export default{
  methods:{
    changeTitle() {
      this.$store.commit('changeTitle');
    }
  }
}
</script>
