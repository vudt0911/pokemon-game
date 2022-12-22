<template>
  <div class="result">
    <h1>✨ Congratulations ✨</h1>
    <h3>{{ Math.round(timer / 1000) }} seconds</h3>
    <button class="start-again" @click="startAgain()">Start Again</button>
  </div>
</template>

<script>
export default {
  name: "ResultPage",
  props: {
    timer: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    startAgain() {
      this.$emit("startAgain", "home-page");
    },
  },
};
</script>

<style scoped>
.result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
}

h1 {
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding: 0;
}

h3 {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin: 24px 0 0;
  padding: 0;
}

.start-again {
  background-color: #ff0000;
  color: #f5f5f5;
  font-weight: 700;
  font: var(--font);
  box-shadow: none;
  border: 1px solid var(--light);
  margin: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}
</style>
