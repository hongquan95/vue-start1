<template>
  <v-app app class="grey lighten-4">
    <Narbar/>
    <v-content class="mx-4 mb-4">
      <router-view></router-view> |
    </v-content>
    <Footer/>
  </v-app>
</template>
<script>
import Narbar from '@/components/Narbar'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Narbar,
    Footer
  },
  data () {
    return {

    }
  }
}
</script>
