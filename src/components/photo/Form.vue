<script>
import MainBtn from "@/components/UI/MainBtn.vue"
import {mapMutations} from "vuex"

export default {
  name: "Form",
  components: {MainBtn},
  data: () => ({
    title: '',
    img: null,
  }),
  methods: {
    ...mapMutations(["addPhoto"])
  },
}
</script>

<template>
  <VForm>
    <VContainer>
      <VRow class="align-end">
        <VTextField v-model="title"/>
        <VFileInput v-model="img"/>
        <MainBtn @addPhoto="addPhoto({title: title, img:img})">Add photo</MainBtn>
      </VRow>
    </VContainer>
  </VForm>
</template>

<style scoped>

</style>