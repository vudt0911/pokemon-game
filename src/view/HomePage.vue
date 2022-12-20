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
        <span class="content-sub-card content-sub-card1">4x4</span>
        <span class="content-sub-card">Medium</span>
      </button>
      <button class="sub-card-home-page" @click="startGame('hard')">
        <span class="content-sub-card content-sub-card1">8x8</span>
        <span class="content-sub-card">Hard</span>
      </button>
      <button class="sub-card-home-page" @click="startGame('super-hard')">
        <span class="content-sub-card content-sub-card1">8x8</span>
        <span class="content-sub-card">Super Hard</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      mode: "",
    };
  },
  methods: {
    startGame(mode) {
      this.mode = mode;
      this.$emit("startGame", this.mode);
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
