<script>
export default {
  name: "MainBtn",
  methods: {
    addPhoto() {
      this.$emit('addPhoto')
    },
  },
}
</script>

<template>
  <VBtn @click="addPhoto" color="blue lighten-1" class="mb-6 btn">
    <slot/>
  </VBtn>
</template>

<style scoped>
.btn {
  color: white;
}
</style>