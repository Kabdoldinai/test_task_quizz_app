<template>
  <div>
    <div>
      <img class="element element__el1" src="@/assets/element1.svg">
      <img class="element element__el2" src="@/assets/element2.svg">
      <img class="element element__el3" src="@/assets/element3.svg">
      <img class="element element__el4" src="@/assets/element4.svg">
      <div class="globalContainer">
        <div>
          <h2 class="welcomeHeader">Welcome to the</h2>
          <img src=@/assets/logo.svg class="logo">
        </div>
        <div class="categoryContainer">
          <div class="block">
            <div class="cup">
              <img src=@/assets/cup.svg>
              <p>Difficulty</p>
            </div>
            <div class="field-container dropdown">
              <img class="arrow" src="@/assets/arrow.svg">
              <select v-model="selectedDifficulty" class="dropdown-select">
                <option disabled value="">select difficulty</option>
                <option>easy</option>
                <option>hard</option>
              </select>
            </div>
            <div class="cup amount">
              <img src=@/assets/amount.svg>
              <p>Amount</p>
            </div>
            <div class="field-container">
                <input class="categoryBox" type="text" v-model="amount">
            </div>
            <button type="button" class="btn btn__main" v-on:click="startGame">Start</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Home extends Vue {


  public selectedDifficulty = '';
  public amount = '';


  public startGame() {
    localStorage.setItem('amount', this.amount);
    localStorage.setItem('selectedDifficulty', this.selectedDifficulty);
    this.$router.push('/game_mode?amount='+ this.amount+'&difficulty='+this.selectedDifficulty);
  }
}
</script>

