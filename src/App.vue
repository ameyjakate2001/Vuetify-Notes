<template>
  <v-app>
    


      <navbar></navbar>
    <v-content class="mx-4 my-4">
    <router-view></router-view>
    </v-content>


  </v-app>
</template>

<script>
import navbar from './components/navbar'
export default {
  components:{
      navbar
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
