<template>
  <div class="card">
    <div
      class="card__inner"
      v-for="(card, index) in arrayCard"
      @click="toggleCardHandler(card, index)"
      :class="{
        'toggle-card':
          card_game[index].isToggle &&
          card_game[index].cardNumber == card &&
          card_game[index].index == index,
      }"
      :key="index"
    >
      <div class="card__face card__face-front">
        <div
          class="card__content"
          :style="{
            'background-size': `${
              (((920 - 16 * 4) / Math.sqrt(arrayCard.length) - 16) * 3) / 4 / 3
            }px ${
              (((920 - 16 * 4) / Math.sqrt(arrayCard.length) - 16) * 3) / 4 / 3
            }px`,
          }"
        ></div>
      </div>
      <div class="card__face card__face-back">
        <div
          class="card__content"
          :style="{
            backgroundImage: `url('${require('@/assets/images/' +
              card +
              '.png')}')`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card_game",
  data() {
    return {
      card_game: [],
      arrayCard: [],
    };
  },
  mounted() {
    if (this.level === "easy") {
      this.card_game = Array(16).fill({
        isToggle: false,
        cardNumber: -1,
        index: -1,
      });
      console.log(this.card_game);
      this.arrayCard = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    } else if (this.level === "medium") {
      // ...
    } else if (this.level === "hard") {
      this.level_game = "8x8";
    } else if (this.level === "super-hard") {
      this.level_game = "10x10";
    }
  },
  props: {
    level: {
      type: String,
      default: "",
    },
  },
  methods: {
    toggleCardHandler(card, index) {
      console.log(card, index, this.card_game[index].isToggle);
      if (this.card_game[index].isToggle) {
        this.card_game[index].isToggle = false;
        this.card_game[index].cardNumber = card;
        this.card_game[index].index = index;
        return;
      }
      this.card_game[index].isToggle = true;
      this.card_game[index].cardNumber = card;
      this.card_game[index].index = index;
    },
  },
};
</script>

<style scoped>
.card {
  width: 450px;
  height: 500px;
  perspective: 1000px;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card__inner {
  position: relative;
  width: 90px;
  height: 120px;
  text-align: center;
  transition: transform 0.3s;
  transform-style: preserve-3d;
  margin: 5px;
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

.card__face-front {
  background-color: #ccc;
  color: #000;
}

.card__face-back {
  background-color: #fff;
  color: #fff;
  transform: rotateY(180deg);
}

/*.card:hover .card__inner {*/
/*  transform: rotateY(180deg);*/
/*}*/

.card__face-front .card__content {
  background: url("~@/assets/images/icon_back.png") no-repeat center center;
  height: 100%;
  width: 100%;
}

.card__face-back .card__content {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
}

.toggle-card {
  transform: rotateY(180deg);
}
</style>
