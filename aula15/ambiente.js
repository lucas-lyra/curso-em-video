let num = [5,8,4]
num.sort()
console.log(`noso vetor e o ${num}`);

num[3] = 6

console.log(num);

num.push(7)

console.log(num);

console.log(num.length);

for(let pos = 0; pos< num.length ; pos ++){
    console.log(num[pos]);
}

let pos = num.indexOf(8)
console.log(pos);