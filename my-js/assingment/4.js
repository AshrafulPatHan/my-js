// problem 1

function calculateTax(income, expenses) {
// You have to write your code here
    if (income < expenses) {
        return console.error("The expenses is bigger then income");
    }else if (income <= 0) {
        return console.error("The income is small then 0 ");
    }else if (expenses <= 0) {
        return console.error("The expenses is small then 0");
    }
    const খরচের_পার্থক = income-expenses;
    const Tex = খরচের_পার্থক*.20;
    return Tex
}

const pro1 = calculateTax(10, -5 )
console.log(pro1);


// problem 2




