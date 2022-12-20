<template>
  <home-page v-if="currentPage === 'home-page'" @startGame="gamePlay($event)" />
  <game-page v-else-if="currentPage === 'game-page'" />
  <result-page v-else />
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
    };
  },
  methods: {
    gamePlay(data) {
      console.log(data);
      this.currentPage = "game-page";
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
