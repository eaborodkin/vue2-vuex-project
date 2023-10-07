<script>
export default {
  name: "Dialog",
  props: {
  },
  data: () => ({
  }),
  watch: {
  },
  computed: {
  },
}
</script>

<template>
  <VDialog
      v-model="$store.getters.getDialogVisible"
      max-width="600"
      @click:outside="$store.commit('hideDialog')"
  >
    <VCard>
      <VCardTitle>{{ $store.getters.getCurrentPhoto.title }}</VCardTitle>
      <VCardText>
        <VImg :src="$store.getters.getCurrentPhoto.url"/>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style scoped>

</style>