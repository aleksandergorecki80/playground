const isPosible = () => {
  const result = Math.floor(Math.random() * 4);
  console.log(result);

  return result === 1 ? true : false;
};

let posible = false;
while (!posible) {
    posible = isPosible();
}

console.log(posible);
