<template>
  <div class="home">
    <form @submit.prevent="addAnswer">
    <input type="text" v-model="newAnswer.answers">
    <input type="text" v-model="newAnswer.answersPerDay">
    <input type="text" v-model="newAnswer.questions">
    <input type="text" v-model="newAnswer.studyEvents">
    <input type="text" v-model="newAnswer.users">
    <button type="submit">Save</button>
    </form>

    <p>
    </p>
  </div>
 
</template>

<script>
// @ is an alias to /src

import firebase from '../firebase';
import Vue from 'vue'
let answersRef = firebase.database().ref('answers');

new Vue({
  ready: function(){
    answersRef.on('value', function(snapshot){
      console.log(snapshot.val());
      
    });

  },
  data(){
    return{
      newAnswer:{
        answers:'',
        answersPerDay:'',
        questions:'',
        studyEvents:'',
        users:''
      }
      
      }
    },
    firebase:{
        answers: answersRef
    },
  methods:{
    addAnswer(){
      answersRef.push(this.newAnswer)
      this.newAnswer.answers='',
      this.newAnswer.answersPerDay='',
      this.newAnswer.questions='';
      this.newAnswer.studyEvents ='';
      this.newAnswer.users='';
      
    }
}
})


</script>

