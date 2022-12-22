export function handlerArrayCard(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(i);
  }
  let newArray = [...array, ...array];
  newArray = newArray
    .sort(() => Math.random() - 0.5)
    .sort(() => Math.random() - 0.5)
    .sort(() => Math.random() - 0.5);
  return newArray;
}
