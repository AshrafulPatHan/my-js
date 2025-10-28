function convertLettersToNumbers(str) {
    let result = "";
    let stor = "";
    let count = 1;

    // start loop
    for (let c = 0; c < str.length; c++) {
        if (str[c] === str[c+1]  ) {
            count++;
        }else{
            stor = str[c] + count;
            result += stor;
            count = 1;
        } 
    }
    return result;
};
console.log(convertLettersToNumbers("aabbchhh"));

