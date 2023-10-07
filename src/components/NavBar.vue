<script>
export default {
  name: "NavBar"
}
</script>

<template>
    <VAppBar
        app
        color="blue lighten-1"
        dark
    >
      <VSpacer/>
      <VBtn outlined class="ml-3"><RouterLink to="/">Main</RouterLink></VBtn>
      <VBtn outlined class="ml-3"><RouterLink to="/photo">Photo gallery</RouterLink></VBtn>
    </VAppBar>
</template>

<style scoped>

</style>