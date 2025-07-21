let array = [1,5,9,7,6,3,1,15,88]

array.map(data => {
    console.log(data);
})

const TheArray = [...array]

const sort = TheArray.sort(
    function (a,b) {
        return a - b ;
    }
);

console.log(sort);

const reverse = array.reverse();
console.log(reverse);

sort.map(data=>{
    console.log(data);
    
})

