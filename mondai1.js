let years = [];
for (i = 1; i <= 2000; i++) {
  years.push(i);
}

years.push(-200);

let uruuYears = [];
let heiYears = [];
for (i = 0; i <= years.length; i++) {
  if (years[i] > 0) {
    if (years[i] % 4 === 0) {
      if (years[i] % 100 != 0) {
        uruuYears.push(years[i]);
      } else if (years[i] % 400 === 0) {
        uruuYears.push(years[i]);
      } else {
        heiYears.push(years[i]);
      }
    } else {
      heiYears.push(years[i]);
    }
  }
}

console.log(uruuYears);
console.log(heiYears);
