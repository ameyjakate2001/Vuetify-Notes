<template>
  <nav>
    <v-app-bar flat class="dark-3 pink">
      <v-app-bar-nav-icon
        class="white--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase white--text">
        <span class="font-weight-light">my</span>
        <span>Notes</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn text color="light">
        <span>Sign Out</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app temporary v-model="drawer" class="primary">

      <v-row>

        <v-col justify="center" align="center" class="pb-0">
          <v-avatar color="primary" class="mt-4" size="100">
            <img src="/avatar-1.png" alt="" />
          </v-avatar>
          <p class="white--text display-8 mt-1">Akshara Jakate</p>
        </v-col>
       <v-col justify="center" align="center" class="pt-0 mb-3">
          <popup/>
       </v-col>

      </v-row>

    
      <v-list-item :to="list.route" v-for="list in links" :key="list.id">
        <v-list-item-icon>
          <v-icon class="white--text">{{ list.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="white--text">{{
            list.text
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </nav>
</template> 

<script>
import Popup from './popup'
export default {
  components: {
        Popup
    },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" },
      ],
    };
  },
};
</script>

<style>
</style>