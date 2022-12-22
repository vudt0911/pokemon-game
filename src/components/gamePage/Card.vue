<template>
  <div class="card">
    <div
      class="card__inner"
      v-for="(card, index) in arrayCard"
      @click="toggleCardHandler(card, index)"
      :key="index"
      :class="{
        'toggle-card':
          this.cardObject[index].isFlipped === true ||
          this.cardObject[index].isMatcher === true,
      }"
      :style="{
        width: `${480 / Math.sqrt(arrayCard.length)}px`,
        height: `${640 / Math.sqrt(arrayCard.length)}px`,
        perspective: `${(480 / Math.sqrt(arrayCard.length)) * 2}px`,
      }"
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
import { filterObject } from "@/utils/filterObject";

export default {
  name: "Card_game",
  data() {
    return {
      arrayCard: [...this.level.arrayCard],
      cardObject: { ...this.level.cardObject },
      isMatcher: [],
      result: "",
    };
  },
  props: {
    level: {
      type: Object,
    },
  },
  methods: {
    toggleCardHandler(card, index) {
      if (this.isMatcher.length === 2) return;
      if (this.cardObject[index].isFlipped === false) {
        this.cardObject[index].isFlipped = true;
        if (this.isMatcher.length === 0) {
          this.isMatcher.push(index);
        } else if (this.isMatcher.length === 1) {
          this.isMatcher.push(index);
          if (
            this.cardObject[this.isMatcher[0]].card ===
            this.cardObject[this.isMatcher[1]].card
          ) {
            this.cardObject[this.isMatcher[0]].isMatcher = true;
            this.cardObject[this.isMatcher[1]].isMatcher = true;
            this.isMatcher = [];
          } else {
            setTimeout(() => {
              this.cardObject[this.isMatcher[0]].isFlipped = false;
              this.cardObject[this.isMatcher[1]].isFlipped = false;
              this.isMatcher = [];
            }, 500);
          }
          // filter object
          const newObject = filterObject(
            this.cardObject,
            (card) => card.isMatcher
          );
          // find length of object => Object.keys(newObject).length
          Object.keys(newObject).length === this.arrayCard.length
            ? (this.result = "win")
            : (this.result = "lose");
          this.$emit("result", this.result);
        }
      } else {
        this.cardObject[index].isFlipped = false;
      }
    },
  },
};
</script>

<style scoped>
.card {
  width: 620px;
  perspective: 1000px;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card__inner {
  position: relative;
  /*width: 90px;*/
  /*height: 120px;*/
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
  box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.2);
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
