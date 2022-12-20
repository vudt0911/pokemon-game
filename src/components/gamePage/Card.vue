<template>
  <div class="card" @click="toggleCardHandler()">
    <div class="card__inner" :class="{ 'toggle-card': toggleCard }">
      <div class="card__face card_face-front">
        <div class="card__content">Front</div>
      </div>

      <div class="card__face card_face-back">
        <div class="card__content">Back</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card_game",
  data() {
    return {
      toggleCard: false,
    };
  },
  methods: {
    toggleCardHandler() {
      this.toggleCard = !this.toggleCard;
    },
  },
};
</script>

<style scoped>
.card {
  width: 90px;
  height: 120px;
  perspective: 1000px;
  margin: 1rem;
}

.card__inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.3s;
  transform-style: preserve-3d;
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.2);
}

.card_face-front {
  background-color: #ccc;
  color: #000;
}

.card_face-back {
  background-color: #000;
  color: #fff;
  transform: rotateY(180deg);
}

/*.card:hover .card__inner {*/
/*  transform: rotateY(180deg);*/
/*}*/

.toggle-card {
  transform: rotateY(180deg);
}
</style>
