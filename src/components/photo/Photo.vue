<script>
import {mapMutations} from "vuex"

export default {
  name: "Photo",
  props: {
    photo: {
      type: Object,
      default: {
        albumId: {
          type: Number,
          required: true,
        },
        id: {
          type: Number,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
        thumbnailUrl: {
          type: String,
          required: true,
        }
      },
      required: true,
    },
  },
  methods: {
    ...mapMutations(["setCurrentPhoto", "showDialog"]),
    openPhoto() {
      this.setCurrentPhoto(this.photo)
      this.showDialog()
    },
  },
}
</script>

<template>
  <VCol cols="4">
    <VCard @click="openPhoto">
      <VCardTitle>{{ photo.title }}</VCardTitle>
      <VCardText>
        <VImg
            width="280px"
            :src="photo.url"
            :alt="photo.title"
        />
      </VCardText>
    </VCard>
  </VCol>
</template>

<style scoped>

</style>