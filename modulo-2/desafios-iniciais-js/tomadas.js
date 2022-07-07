let lines = gets().split("\n");
let line = lines.shift().split(' ');
let t = 5;
let all = 0;

for (let i = 1; i < t; i++) {
  all = all + parseInt(line.slice(-i));
}

all = all - 3;
console.log(all);