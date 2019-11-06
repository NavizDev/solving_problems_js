function calculteHeight(h) {
  let totalH = h;
  for (let i = 0; i < 6; i++) {
    totalH = totalH * 2;
  }
  console.log("La altura debe ser: ", totalH);
  return totalH;
}

function problem2(word) {
  let array = [...word];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let num = array[i].charCodeAt();
    if (num % 2 != 0) sum += num; //Si es impar
  }
  return sum;
}
