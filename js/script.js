function calculteHeight(h) {
  let totalH = h;
  for (let i = 0; i < 6; i++) {
    totalH = totalH * 2;
  }
  console.log("La altura debe ser: ", totalH);
  return totalH;
}
