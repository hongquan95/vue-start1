<template>
  <div class="home">
    <v-subheader>Dashboard</v-subheader>
    <v-container grid-list-xs>
      <!-- <v-layout row wrap>
        <v-flex xs12 md6>
          <p class="red--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nihil, deserunt soluta cumque quas ea odit fugiat, consequuntur id amet sit quae voluptas reprehenderit sapiente quos deleniti, quam cum esse.</p>
        </v-flex>
        <v-flex xs12 md6>
          <p class="blue--text">123 Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nihil, deserunt soluta cumque quas ea odit fugiat, consequuntur id amet sit quae voluptas reprehenderit sapiente quos deleniti, quam cum esse.</p>
        </v-flex>
      </v-layout>-->
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn color="lighten-grey" v-on="on" small text @click="sortBy('name')">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By name</span>
            </v-btn>
          </template>
          <span>Sort by name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn color="lighten-grey" v-on="on" small text @click="sortBy('age')">
              <v-icon left small>mdi-human</v-icon>
              <span class="caption text-lowercase">By age</span>
            </v-btn>
          </template>
          <span>Sort by age</span>
        </v-tooltip>
        <!-- <v-tooltip top>
          <v-btn color="lighten-grey" small text @click="sortBy(age)" vslot>
            <v-icon left small>mdi-human</v-icon>
            <span class="caption text-lowercase">By age</span>
          </v-btn>
          <span slot="activator">Sort by name</span>
        </v-tooltip> -->
      </v-layout>
      <v-card flat v-for="project in projects" :key="project.person">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.name }}</div>
          </v-flex>
          <v-flex xs12 md2>
            <div class="caption grey--text">age</div>
            <div>{{ project.age }}</div>
          </v-flex>
          <v-flex xs12 md2>
            <div class="caption grey--text">Created</div>
            <div>{{ project.created }}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`" active-class="false">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from '@/firebase'
export default {
  data() {
    return {
      projects: [
        { name: "Buan", age: 10, created: "2012-02-03", status: "completed" },
        { name: "Aop", age: 12, created: "2013-02-03", status: "pending" },
        { name: "Came", age: 11, created: "2014-02-03", status: "deleted" }
      ]
    };
  },
  methods: {
    sortBy(prop) {

      this.projects.sort((a, b) => a[prop] > b[prop] ? -1 : 1)
    }
  },
  created() {
    db.collection('persons').onSnapshot((res) => {
      // debugger;
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type == 'added') {
          this.projects.unshift({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      })
    })
  }
};
</script>
<style>
  .project.completed {
    border-left: 4px solid #3dc1c2;
  }
  .project.success {
    border-left: 4px solid #3dc23d;
  }
  .project.pending {
    border-left: 4px solid orange;
  }
  .project.deleted {
    border-left: 4px solid tomato;
  }
  .v-chip.completed {
    background: greenyellow!important;
  }
  .v-chip.success {
    background: rgb(47, 255, 54)!important;
  }
  .v-chip.pending {
    background: yellow!important;
  }
  .v-chip.deleted {
    background: red!important;
  }
</style>
