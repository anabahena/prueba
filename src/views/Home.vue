<template>
  <div class="home">

    <li v-for="answer in newAnswer" v-bind:key="answer">{{newAnswer.answer}}</li>
    <form @submit.prevent="addAnswer">
    <input type="text" v-model="newAnswer.answers">
    <input type="text" v-model="newAnswer.answersPerDay">
    <input type="text" v-model="newAnswer.questions">
    <input type="text" v-model="newAnswer.studyEvents">
    <input type="text" v-model="newAnswer.users">
    <button type="submit">Save</button>
    </form>
  </div>
 
</template>

<script>
// @ is an alias to /src

import firebase from '../firebase';
let answersRef = firebase.database().ref('answers');

export default {
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
    firebase(){
      return {
        answers: answersRef
      }
    },
  methods:{
    addAnswer(){
      answersRef.push(this.newAnswer)
      
    }
}
}


</script>

