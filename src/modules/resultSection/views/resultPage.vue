<template>
  <div>
    <div>
      <img class="element element__el9" src="@/assets/element9.svg">
      <img class="element element__el10" src="@/assets/element10.svg">
      <img class="element element__el11" src="@/assets/element11.svg">
      <img class="element element__el12" src="@/assets/element12.svg">
    </div>
          <div class="flex-center">
            <div class="container" >
              <div v-for="(question, i) in allQuestions" :key="i">
                <div v-if="answersCorrectness[i] === false">
                  <div class="wrongBox">{{question}}
                    <img class="element element__el13" src="@/assets/close.svg"></div>
                </div>
                <div v-if="answersCorrectness[i] === true">
                  <div class="correctBox">{{question}}
                    <img class="element element__el13" src="@/assets/second_arrow.svg"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-center scoreBlock">
            <img class="scoreIcon" src="@/assets/scoreicn.svg">
            <div style="color: white">You scored <span class="scoreTxt">{{score}}</span>/{{questionsAmount}}</div>
          </div>
    <div class="placeBtnCenter">
      <button type="button" class="btn-play-again" v-on:click="playAgain">Play Again</button>
    </div>

    </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Result extends Vue {

  public score = localStorage.getItem('score');
  public questionsAmount = localStorage.getItem('questionsAmount');
  // public allQuestions = ['Medya', 'Indie', 'Kana', 'Sanya'];
  public allQuestions = JSON.parse(localStorage.getItem('allQuestions'));
  public answersCorrectness = JSON.parse(localStorage.getItem('answersCorrectness'));

  public playAgain() {
    this.$router.push('/');
  }
}
</script>
<style lang="scss">

.container {
  margin-top: -53rem;
  position: absolute;
  display: block;
  //justify-content: center;
  //align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 700px;
  height: 495px;

}

#page-wrap {
  width: 800px;
}
.placeBtnCenter {
  display: flex;
  justify-content: center;
}

.btn-play-again {
  margin-top: 42rem;
  color: #FFFFFF;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  width: 300px;
  height: 70px;
  text-transform: uppercase;
  cursor: pointer;
  background: linear-gradient(90deg, #FFA67A 0%, #FF6065 100%);
  box-shadow: none;
  font-weight: bold;
  border: unset;

}

::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background:#ca6684;;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #424A9E;
}

</style>