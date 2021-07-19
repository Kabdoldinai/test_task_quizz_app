<template>
  <div class="content">
    <img class="element element__el5" src="@/assets/element5.svg">
    <img class="element element__el6" src="@/assets/element6.svg">
    <img class="element element__el7" src="@/assets/element7.svg">
    <img class="element element__el8" src="@/assets/element8.svg">
    <div class="position-relative">
      <div class="subjectHeader">
        <span>Entertainment: <br> Videogames</span>
        <div class="line"></div>
      </div>

      <section class="flex-center">
          <ul class="questionBlock" v-for="(question, i) in questions" :key="i">
            <div v-if="i === currentQuestion">
              <p class="subjectHeader subjectHeader__p">{{'level ' + (i+1)}}</p>
              <li class="titleContainer title">
                {{question.question}}
              </li>
              <span v-for="option in allAnswers[i]" :key="option">
                <button class="quiz-question-button" v-on:click="goToNextQuestion(option, question.question)">
                  {{option}}
                </button>
              </span>
            </div>
          </ul>
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
  public option = [];
  public currentQuestion = 0;
  public allQuestions = [];
  public incorrectCorrectAnswers = [];
  public allAnswers = [];
  private rightAnswersCount = 0;
  private answersCorrectness = [];
  public startGameForm: StartGameForm = {
    amount: localStorage.getItem('amount') || '{}',
    selectedDifficulty: localStorage.getItem('selectedDifficulty') || '{}'
}


  public startGame() {
    welcomeService.startGame(this.startGameForm)
        .then((res) => {
          this.questions = res.data.results;
          this.questions.forEach(question => {
            this.incorrectCorrectAnswers =
                question.incorrect_answers;
            this.incorrectCorrectAnswers.push(question.correct_answer);
            this.incorrectCorrectAnswers.sort();
            this.allAnswers.push(this.incorrectCorrectAnswers);
          });
        })
        .catch((error) => {
          this.$store.commit('app/showMessage', ['error', error.response.data.message]);
        });
  }

  public goToNextQuestion(option:string, question:string){
    this.allQuestions.push(question);
    console.log(this.allQuestions);
    if (option === this.questions[this.currentQuestion].correct_answer){
      this.rightAnswersCount++;
      this.answersCorrectness.push(true);
      console.log("Right");
    }
    else {
      this.answersCorrectness.push(false);
      console.log("Wrong");
    }
    this.currentQuestion++;
    if (this.currentQuestion > this.questions.length-1){
      localStorage.setItem('allQuestions', JSON.stringify(this.allQuestions));
      localStorage.setItem('answersCorrectness', JSON.stringify(this.answersCorrectness));
      localStorage.setItem('score', this.rightAnswersCount);
      localStorage.setItem('questionsAmount', this.currentQuestion);
      this.$router.push('/result');
      // console.log(this.allQuestions);
      // <router-link :to="{path: '/result', query: { allQuestions: allQuestions }}"></router-link>
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
    padding: 10px;
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