let array = ["a", "g", "f", "c", "d", "e", "b", "h"] // declear array

let data = array.sort() // sort data

function SeeArray(data) {
    let result = "";

    for (let c = 0; c < data.length; c++) {
        result += data[c];
    }
    return result;
}


console.log(SeeArray(data)); // return the data

