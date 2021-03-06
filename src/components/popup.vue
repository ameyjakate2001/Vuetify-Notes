  
<template>
  <v-dialog max-width="600" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" class="blue darken-1 white--text">
        Add New Project
      </v-btn>
    </template>
     <v-card class="py-6 px-4">
            <h2 class=" text-center grey--text">Add New Project</h2>
             <v-form ref="form" v-model="valid">
                <v-text-field v-model="title" label="title" prepend-icon="mdi-message" :rules="[v =>  v && v.length >= 5 || 'Minimum length is 5 characters']"></v-text-field>
                <v-textarea v-model="content" label="info" prepend-icon="mdi-message"  :rules="[v =>  v && v.length >= 5 || 'Minimum length is 5 characters']"></v-textarea>
                <v-menu>
                    <template v-slot:activator="{on, attrs}" >
                        <v-text-field :rules="[v =>  v && v.length >= 3 || 'Minimum length is 3 characters']" :value="due" label="Due-date" prepend-icon="mdi-message" v-bind="attrs" v-on="on" > </v-text-field>
                    </template>
                    <v-date-picker v-model="due" ></v-date-picker>
                </v-menu>
                 <v-btn @click="test" class="teal white--text" >
                    Add Project
                </v-btn>
          <!-- <v-btn text v-on:click="validate('hi')" class="success mx-0 mt-3">Add Project</v-btn> -->
        </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns'

export default {
  name: "Popup",
  data() {
    return {
      title: '',
      content: '',
      due: null,
    };
  },
   methods: {
       test: ()=>{
           alert('dkfjdsh');
           console.log('hi')
       }
    },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "do MMM yyyy") : "";
    },
  },
};
