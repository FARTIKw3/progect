export const formatPrice = (price: number) => {
  const data = String(price).split("");

  return data
    .reverse()
    .map((num, index) => {
      if (index % 3 === 0) {
        return num + " ";
      }
      return num;
    })
    .reverse();
};
