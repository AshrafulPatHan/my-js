function convertLettersToNumbers(str) {
    let result = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        // যদি পরের অক্ষর একই হয় তাহলে কাউন্ট বাড়াও
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            // না হলে, আগের অক্ষর ও তার কাউন্ট রেজাল্টে যোগ করো
            result += str[i] + count;
            count = 1; // কাউন্ট রিসেট করো
        }
    }

    return result;
}

console.log(convertLettersToNumbers("aabccrrr")); // Output: a2b1c2r3
