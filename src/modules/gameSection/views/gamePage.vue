<template>
  <div class="content">
    <img class="element element__el5" src="@/assets/element5.svg">
    <img class="element element__el6" src="@/assets/element6.svg">
    <img class="element element__el7" src="@/assets/element7.svg">
    <img class="element element__el8" src="@/assets/element8.svg">
    <div class="position-relative">
      <div class="subjectHeader">
        <span>Entertainment: <br> Videogames</span>
        <p>level 1</p>
        <div class="line"></div>
      </div>

      <section class="flex-center">
        <!-- transition -->
<!--        <transition :duration="{ enter: 500, leave: 300 }" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" mode="out-in">-->
          <ul class="questionBlock"
              v-for="(question, i) in questions"
              :key="i">
<!--            <p>{{'level ' + (i+1)}}</p>-->
            <div v-if="i === currentQuestion">
              <li class="titleContainer title">
                {{question.question}}
              </li>
              <span v-for="(incorrect_answers, j) in question.incorrect_answers" :key="j">
                <button class="quiz-question-button" v-on:click="goToNextQuestion()">
                {{incorrect_answers}}
                </button>
              </span>
              <button class="quiz-question-button" v-on:click="goToNextQuestion()">
                {{question.correct_answer}}
              </button>
            </div>
          </ul>
<!--        </transition>-->
      </section>

    </div>
  </div>
</template>


<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';
import {welcomeService} from "@/modules/welcomeSection/service/welcomeService";
import {StartGameForm} from "@/modules/welcomeSection/data/gameData";

@Component
export default class Game extends Vue {

  public questions = [];
  public currentQuestion = 0;
  public startGameForm: StartGameForm = {
    amount: localStorage.getItem('amount') || '{}',
    selectedDifficulty: localStorage.getItem('selectedDifficulty') || '{}',

}

  public startGame() {
    welcomeService.startGame(this.startGameForm)
        .then((res) => {
          console.log(res)
          this.questions = res.data.results;

        })
        .catch((error) => {
          this.$store.commit('app/showMessage', ['error', error.response.data.message]);
        });
  }

  public goToNextQuestion(){
    this.currentQuestion++;
    if (this.currentQuestion > this.questions.length-1){
      this.$router.push('/result')
    }
  }

  private beforeMount() {
    this.startGame();
  }
}
</script>

<style lang="scss" scoped>
  .content {
    background-color: #FFFFFF;
  }


  .quiz-question-button {
    width: 100%;
    padding: 15px;
    border-radius: 14px;
    background: #424A9E;;
    border: unset;
    color: #FFFFFF;
    font-size: 11px;
    cursor: pointer;
    transition: border-color 0.5s, background 0.5s;
    outline: none;
  }
</style>