<template>
  <div class="dashboard">
    <h1 class="grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-row class="mb-5">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              slot="activator"
              text
              color="grey"
              class="ma-3 pa-2"
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left> mdi-folder </v-icon>
              <span class="text-lowercase"> by project name </span>
            </v-btn>
          </template>
          <span> Sorts projects by project name </span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              slot="activator"
              text
              color="grey"
              class="ma-3 pa-2"
              @click="sortBy('due')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left> mdi-account </v-icon>
              <span class="text-lowercase"> by due Date </span>
            </v-btn>
          </template>
          <span> Sorts projects by dueDate </span>
        </v-tooltip>
      </v-row>

      <v-card flat v-for="project in projects" :key="project.title">
        <v-row :class="`pa-3 mt-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Name</div>
            <div dark-2 class="grey--text">{{ project.title }}</div>
          </v-col>
          <v-col cols="4" sm="4" md="2">
            <div class="caption grey--text">Due Date</div>
            <div class="grey--text">{{ project.due }}</div>
          </v-col>
          <v-col cols="4" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div class="grey--text">{{ project.person }}</div>
          </v-col>
          <v-col cols="4" sm="4" md="2">
            <div class="right">
              <v-chip :class="` ${project.status} x white--text caption my-2`">
                {{ project.status }}
              </v-chip>
            </div>
            <!-- <div class="grey--text">{{ project.status }}</div> -->
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Learn Vue JS and Vuetify",
          person: "Akshara Jakate",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Data Structure and Algorithm",
          person: "Rupali Jakate",
          due: "20th Dec 2018",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Strong the Front End",
          person: "Sushil Choudhari",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Perfection in the Front End",
          person: "Nidhish Jakate",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) =>
        a[prop].toLowerCase() < b[prop].toLowerCase() ? -1 : 1
      );
    },
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.v-chip--no-color.theme--light.complete {
  background: #3cd1c2;
}
.v-chip.v-chip--no-color.theme--light.ongoing {
  background: tomato;
}
.v-chip.v-chip--no-color.theme--light.overdue {
  background: #f82e70;
}
</style>
