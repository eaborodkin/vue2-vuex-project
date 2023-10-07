<script>

import {defineComponent} from "vue"
import NavBar from "@/components/NavBar.vue"
import Main from '@/pages/Main.vue'

export default defineComponent({
  components: {NavBar, Main}
})
</script>

<template>
  <VApp wrap>
    <NavBar/>
    <VMain flud>
      <RouterView/>
    </VMain>
  </VApp>
</template>

<style>
.v-application button a {
  color: #fff;
  text-decoration: none;
}
</style>