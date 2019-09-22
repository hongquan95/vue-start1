<template>
  <nav>
		<v-snackbar
      v-model="snackbar"
      :timeout="4000"
			top
			color="success"
    >
      <span>You add new person</span>
      <v-btn
        color="white"
        text
				@click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">To do</span>
        <span>Top</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="grey" v-on="on" class="grey--text lighten-2">
						<v-icon>mdi-chevron-down</v-icon>
						<span>Menu</span>
					</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.id" router :to="link.route">
            <v-list-item-title>
							<v-icon>{{ link.icon }}</v-icon>
							<span>{{ link.text }}</span>
						</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
							<span><a class="git" href="https://github.com/hongquan95/vue-start1" target="_blank"><v-icon>mdi-github-face</v-icon>Github</a></span>
						</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100" color="red">
            <img src="/avatar/1.jpg" alt="alt" />
          </v-avatar>
        </v-flex>
				<v-flex>
					<PopUp @personAdded="snackbar = true"/>
				</v-flex>
      </v-layout>
      <v-list flat>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="white--text">
            <v-list-item-title v-text="link.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import PopUp from './PopUp';
export default {
	components: {
		PopUp
	},
  data() {
    return {
			drawer: false,
			snackbar: false,
      links: [
        { icon: "mdi-dialpad", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "Folder", route: "/folder" },
        { icon: "mdi-account", text: "Person", route: "/person" },
        // { icon: "mdi-account", text: "Deploy", route: "https://github.com/hongquan95/vue-start1" }
      ]
    };
  }
};
</script>

<style>
  .git {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.87) !important;
  }
</style>
