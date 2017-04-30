// your code, here

let snowTotal = Math.round((8 * 20 * 20)/12);
let estimate = 0;

Math.round(snowTotal);

if (snowTotal <= 49) {
  estimate = 20;
}
else if (50 <= snowTotal && snowTotal <= 149) {
  estimate = 50;
}
else if (150 <= snowTotal && snowTotal <= 299) {
  estimate = 100;
}
else (estimate = 150);

console.log(snowTotal);
console.log(estimate);

let projectEstimate = document.getElementById('main');
projectEstimate.innerHTML = 'The cost to shovel ' +
snowTotal +
' cubic feet of snow is $'+ estimate + '.';

console.log(projectEstimate);
