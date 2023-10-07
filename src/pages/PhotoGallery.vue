<script>
import Photo from "@/components/photo/Photo.vue"
import Form from "@/components/photo/Form.vue"
import Dialog from "@/components/photo/Dialog.vue"
import {mapGetters, mapActions} from "vuex"

export default {
  name: "PhotoGallery",
  components: {
    Dialog,
    Form,
    Photo,
  },
  data: () => ({
  }),
  mounted() {
    this.fetchPhotos()
  },
  methods: {
  },
  computed: {
    ...mapGetters({
      photos: 'getAllPhotos',
    }),
    ...mapActions(['fetchPhotos']),
  },
}
</script>

<template>
  <VContainer>
    <Form/>
    <template v-if="Array.isArray(photos) && photos.length > 0">
      <VRow>
        <Photo
            v-for="photo in photos"
            :key="photo.id"
            :photo="photo"
        />
      </VRow>
      <Dialog/>
    </template>
  </VContainer>
</template>

<style scoped>

</style>