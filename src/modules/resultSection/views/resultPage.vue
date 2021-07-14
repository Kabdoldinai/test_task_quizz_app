<template>
  <div>
    <div>
      <img class="element element__el9" src="@/assets/element9.svg">
      <img class="element element__el10" src="@/assets/element10.svg">
      <img class="element element__el11" src="@/assets/element11.svg">
      <img class="element element__el12" src="@/assets/element12.svg">
    </div>
    <div>
          <div class="flex-center position-relative scoreBlock">
            <img class="scoreIcon" src="@/assets/scoreicn.svg">
            <span style="color: white">You scored 08/10</span>
          </div>
    </div>


  </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Result extends Vue {}
</script>
