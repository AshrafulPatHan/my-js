const a = 12 ;
const b = 13 ;
const c = a ;
const d = "this is even number"
const e = "this is odd number"
const f = "this is not a number"
const g = "this is a number"
const i = "This is a String" ;
const j = true ;
const h = j ;

if(typeof h === 'number'){
    console.log(g+" "+"and"+" ");
    if (h%2 === 0) {
        console.log(d);
    }else{
        console.log(e);
    }
}else if(typeof h === "string"){
    console.log(i);
}else{
    console.log("What is this");
    
}