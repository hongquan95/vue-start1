<template>
  <div class="home">
    <v-subheader>Person</v-subheader>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 lg3 v-for="person in persons" :key="person.id">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="green lighten-1">
                <img
                  :src="person.src"
                  alt="John"
                >
              </v-avatar>
            </v-responsive>
            <v-card-text class="text-left">
              <v-card-title>{{ person.name }}</v-card-title>
              <v-btn color="lighten-grey" small text>
                <v-icon left small>mdi-heart</v-icon>
                <span class="caption text-lowercase">Go</span>
              </v-btn>
              {{ person.status }}
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
        return {
      persons: [
        { name: "Public", "status": "active", "src": "/avatar/1.jpg" },
        { name: "Private1", "status": "close", "src": "/avatar/2.jpg" },
        { name: "Local", "status": "close", "src": "/avatar/3.jpg" },
        { name: "All", "status": "expired", "src": "/avatar/4.jpg" },
      ]
    }
  }
}
</script>
