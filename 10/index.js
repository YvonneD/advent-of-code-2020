const fs=require('fs');
const lines=[0].concat(fs.readFileSync('input.txt','utf-8').split('\r\n').filter(x=>x).map(x=>parseInt(x)))
lines.sort((a,b)=>a-b)
let jointage1=0
let jointage3=1
for(let i=1;i<lines.length;i++){
    const diff=lines[i]-lines[i-1]
    if(diff===1) jointage1++
    if(diff===3) jointage3++
}
console.log(jointage1*jointage3)
//part 2 https://github.com/danby14/coding-challenges/blob/master/AoC/2020/10.js
const findNumberOfDifferentConfigs = data => {
    let sorted = data.sort((a, b) => a - b);
    sorted.unshift(0);
    sorted.push(sorted[sorted.length - 1] + 3);
  
    let combinations = 1;
    let consecutive = 0;
    for (let x = 0; x < data.length; x++) {
      if (sorted[x] - sorted[x - 1] === 1 && sorted[x + 1] - sorted[x] === 1) {
        consecutive++;
      } else {
        if (consecutive === 1) combinations *= 2;
        if (consecutive === 2) combinations *= 4;
        if (consecutive === 3) combinations *= 7;
        consecutive = 0;
      }
    }
    return combinations;
  };
  console.log('Part 2:', findNumberOfDifferentConfigs(lines));