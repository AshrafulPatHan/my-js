// problem 1

function calculateTax(income, expenses) {
// You have to write your code here
    if (income < expenses) {
        return "The expenses is bigger then income";
    }else if (income <= 0) {
        return "The income is small then 0 ";
    }else if (expenses <= 0) {
        return "The expenses is small then 0";
    }
    function math(income,expenses) {
       const খরচের_পার্থক = income-expenses;
        const Tex = খরচের_পার্থক*.20;
        return Tex 
    }
    const TeX = math(income,expenses)
    return TeX
}

const pro1 = calculateTax(10, 5.55 )
console.log(pro1);



// problem 2

function sendNotication(email) {
// You have to write your code here
    if (email.indexOf("@") <= 0) {
        return "Invalid Email";
    }else if (email.indexOf(".") <= 0){
        return "Invalid Email";
    }
    function send(email) {
        const array = email.split("@");
        let name = array[0]
        let web = array[1]
        
        const data = name+"sent you an email from"+web;
        return data ;
    }
    return send(email);
}


let email = "ashraful@gmail.com"
const pro2 = sendNotication(email)
console.log(pro2);

// sudo code --
// const data = "split@ok.com"
// const ok = data.split("@") // [ 'split', 'ok.com' ]
// console.log(ok);
// const em = "split@ok.com"

// const oem = data.indexOf("k") // 7
// console.log(oem);
// ---

// problem 3

function checkDigitsInName(name) {
//write your code here
    if (typeof name === "string") {
        const nameRegex = /^[a-zA-Z\s-]+$/; 
        let data = nameRegex.test(name);
        return !data;
    }
    return "Invalid Input"
}

const nameData = "true";
let Myname = checkDigitsInName(nameData)
console.log(Myname);

// sudo code ---
// if (typeof "a" === "string") {
//     console.log("the data is string");
    
// }else{
//     console.log("the data is something else");
    
// }
// ----

// problem 4

function calculateFinalScore(obj) {
//write your code here

    // cake the object is true of false
    if ( typeof obj.name === "string" & typeof obj.testScore === "number" & typeof obj.schoolGrade === "number" ) {
        console.log(" ");
        
    }else{
        return "Invalid Input";
    }

    // set variable
    let Profession;
    let TestScore = obj.testScore;
    let IsFFamily = obj.isFFamily;
    let SchoolGrade = obj.schoolGrade;

    // cake is farmer
    if ( IsFFamily === true ) {
        Profession = 20;
    }
    else{
        Profession = 0;
    }

    // log the data
    console.log({ Profession, TestScore, SchoolGrade , IsFFamily });
    
    // sum the data
    function Calculate(Profession,TestScore,SchoolGrade) {
        const sum = Profession + TestScore + SchoolGrade ;
        return sum
    }
    const sumData =  Calculate(Profession,TestScore,SchoolGrade);

    // return the result on server
    if (sumData >= 80) {
        return true
    } else{
        return false
    }
}

let NetData = { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily : true }
// NetData = "hello"

console.log(calculateFinalScore(NetData));

// problem 5

function waitingTime(waitingTimes , serialNumber) {
// You have to write your code here

    // Input validation
    if (typeof waitingTimes === "string") {
        return "Invalid Input"
    }
    else if (typeof waitingTimes.length === "number" & typeof serialNumber === "number" ) {
    console.log(" ");
        // set variable
        let Time = waitingTimes;
        let Serial = serialNumber - 1 ;
        let interviewer = Time.length;

        // calculate the average number
        function এভারেজ(Time) {
            const sum = Time.reduce((a, b) => a + b, 0);
            const average = sum / interviewer;
            console.log({sum,average});
            
            return average
        }
        const TheAverageTime = এভারেজ(Time);

        // return the result
        let netPeople =  Serial - interviewer ;
        let netTime = netPeople*TheAverageTime;
        console.log({Serial,interviewer,TheAverageTime,netPeople,netTime});
        
        return netTime
    }else {
        return "Invalid Input"
    }
}

let WaitingTime = waitingTime([13, 2], 6)
console.log(WaitingTime);