<template>
  <v-app app class="grey lighten-4">
    <Narbar/>
    <v-content class="mx-4 mb-4">
      <router-view></router-view> |
    </v-content>
  </v-app>
</template>
<script>
import Narbar from '@/components/Narbar'
export default {
  name: 'App',
  components: {
    Narbar
  },
  data () {
    return {

    }
  }
}
</script>
