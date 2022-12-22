<template>
  <home-page v-if="currentPage === 'home-page'" @startGame="gamePlay($event)" />
  <game-page
    v-else-if="currentPage === 'game-page'"
    :level="level"
    @result="handlerResult($event)"
  />
  <result-page v-else :timer="resultTime" @startAgain="startAgain($event)" />
  <footer-game />
</template>

<script>
import HomePage from "@/view/HomePage.vue";
import GamePage from "@/view/GamePage.vue";
import ResultPage from "@/view/ResultPage.vue";
import FooterGame from "@/components/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      currentPage: "home-page",
      level: {},
      timeStart: null,
      resultTime: 0,
    };
  },
  methods: {
    gamePlay(data) {
      this.level = data;
      this.timeStart = new Date().getTime();
      this.currentPage = "game-page";
    },
    handlerResult(result) {
      if (result === "win") {
        this.resultTime = new Date().getTime() - this.timeStart;
        this.currentPage = "result-page";
      }
    },
    startAgain(data) {
      this.currentPage = data;
    },
  },
  components: {
    HomePage,
    GamePage,
    ResultPage,
    FooterGame,
  },
};
</script>
