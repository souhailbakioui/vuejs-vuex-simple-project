<template>
  <div class="about">
    <h1>This is an profil page</h1>
    <h2>Your Name is : {{this.$store.state.name }}</h2>
    <h2>Your age is : {{ this.$store.state.age }}</h2>
    <input type="text" v-model="this.$store.state.name ">
  </div>
</template>
