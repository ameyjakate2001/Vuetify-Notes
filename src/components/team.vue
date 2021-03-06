<template>
  <div class="team">
    <h1 class="grey--text">Team</h1>

    <v-container class="my-5">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person"
        >
          <v-card class="text-center ma-3 pb-4">
            <v-responsive class="pt-4">
              <v-avatar  size="100" flat class="grey lighten-2"><img :src="person.avatar" alt=""></v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="title">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions class="ma-4">
              <v-btn depressed text color="grey">
                <v-icon left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "The Net Ninja", role: "Web developer",avatar:'/avatar-1.png' },
        { name: "Ryu", role: "Graphic designer" ,avatar:'/avatar-2.png' },
        { name: "Chun Li", role: "Web developer" ,avatar:'/avatar-3.png' },
        { name: "Gouken", role: "Social media maverick",avatar:'/avatar-4.png'  },
        { name: "Yoshi", role: "Sales guru" ,avatar:'/avatar-5.png' },
      ],
    };
  },
};
</script>

