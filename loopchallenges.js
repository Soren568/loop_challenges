// Print odds 1-20

for(var i=0; i<20; i++){
    if(i%2!=0){
        console.log(i)
    }
}

var i = 0;
while(i<20){
    if(i%2!=0){
        console.log(i);
    }
    i++;
}

// Decreasing mult.s of 3
for(var i=100; i>0; i--){
    if(i%3==0){
        console.log(i)
    }
}

var i = 100;
while(i>0){
    if(i%3==0){
        console.log(i)
    }
    i--
}

// Print the sequence
const seq=[4, 2.5, 1, -.5, -2, -3.5]
seq.forEach(e => {
    console.log(e)
});

var x = 4;
for(i=0; i<6; i++){
    console.log(x)
    x = x - 1.5;
}

// Sigma
sum = 0
for(i=0; i<=100; i++){
    sum += i 
}
console.log(sum)

sum = 0
i=0
while(i<101){
    sum += i; 
    i++;
}
console.log(sum)

// Factorial

product = 1
for(i=1; i<13; i++){
    product *= i;
}
console.log(product)

product=1
i=1
while(i<13){
    product *= i;
    i++
}
console.log(product)