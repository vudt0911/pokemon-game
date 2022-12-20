<template>
  <div class="game-page">
    <Card />
  </div>
</template>

<script>
import Card from "@/components/gamePage/Card.vue";
export default {
  name: "GamePage",
  components: {
    Card,
  },
};
</script>

<style scoped>
.game-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
}
</style>
