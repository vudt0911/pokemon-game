<template>
  <div class="home-page">
    <h1 class="title">POKE MEMORIES</h1>
    <h3 class="select-game">Select mode to start game</h3>
    <div class="action card-home-page">
      <button class="sub-card-home-page" @click="startGame('easy')">
        <span class="content-sub-card content-sub-card1">4x4</span>
        <span class="content-sub-card">Easy</span>
      </button>
      <button class="sub-card-home-page" @click="startGame('medium')">
        <span class="content-sub-card content-sub-card1">6x6</span>
        <span class="content-sub-card">Medium</span>
      </button>
      <button class="sub-card-home-page" @click="startGame('hard')">
        <span class="content-sub-card content-sub-card1">8x8</span>
        <span class="content-sub-card">Hard</span>
      </button>
    </div>
  </div>
</template>
<script>
import { handlerArrayCard } from "@/utils/handlerArrayCard.js";
export default {
  name: "HomePage",
  data() {
    return {
      mode: "",
      arrayCard: [],
      cardObject: {},
    };
  },
  methods: {
    startGame(mode) {
      if (mode === "easy") {
        this.arrayCard = handlerArrayCard(8);
        this.mode = mode;
      } else if (mode === "medium") {
        this.arrayCard = handlerArrayCard(18);
        this.mode = mode;
      } else if (mode === "hard") {
        this.arrayCard = handlerArrayCard(32);
        this.mode = mode;
      }
      for (let i = 0; i < this.arrayCard.length; i++) {
        this.cardObject[i] = {
          card: this.arrayCard[i],
          indexOfArrayCard: i,
          isFlipped: false,
          isMatcher: false,
        };
      }
      this.$emit("startGame", {
        mode,
        arrayCard: this.arrayCard,
        cardObject: this.cardObject,
      });
    },
  },
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
  background-color: #f5f5f5;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  color: #f5f5f5;
  background-color: #ff0000;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.select-game {
  margin: 20px 0px;
  font-size: 2rem;
  font-weight: 500;
}

.card-home-page {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.sub-card-home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
}

.sub-card-home-page:hover {
  background-color: #ccc;
}

.content-sub-card {
  font-size: 1rem;
  font-weight: 500;
}

.content-sub-card1 {
  margin-bottom: 10px;
}
</style>
