<template>
  <div class="home">
    <v-subheader>Folder</v-subheader>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-expansion-panels xs12 sm6 lg3 dark popout>
          <v-expansion-panel v-for="folder in folders" :key="folder.id">
            <v-expansion-panel-header>{{ folder.title }}</v-expansion-panel-header>
            <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      accordion: true,
      folders: [
        { title: "Spring" },
        { title: "Summer" },
        { title: "Fall" },
        { title: "Winter" }
      ]
    };
  }
};
</script>
