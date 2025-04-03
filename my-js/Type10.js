// Type of data

let number = 2+2 ;
console.log(number);

let num2 = 1/0;
console.log(num2);

let num_2 = Infinity;
console.log(num2);

// infinity
let infinity = 0/num_2;
console.log(infinity);

// NaN
let the_nan = NaN;
let hoc = the_nan;
if (isNaN(hoc)) {
    console.log("this is true");
    
}else{
    console.log("this is not a nan");
}

// BigInt

let Bigint1 = 154654513546547654587454587548745857544;
let Bigint2 = 154654513546547654587454587548745857544n;
console.log(Bigint1);
console.log(Bigint2);
console.table(Bigint2);

