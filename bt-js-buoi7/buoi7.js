document.getElementById("submit").onclick = function () {
    const Default1El = document.getElementById("flexRadioDefault1");
    const Default2El = document.getElementById("flexRadioDefault2");
    const Default3El = document.getElementById("flexRadioDefault3");
    const Default4El = document.getElementById("flexRadioDefault4");
    const Default5El = document.getElementById("flexRadioDefault5");
    const Default6El = document.getElementById("flexRadioDefault6");
    const Default7El = document.getElementById("flexRadioDefault7");
    const Default8El = document.getElementById("flexRadioDefault8");
    const Default9El = document.getElementById("flexRadioDefault9");
    const Default10El = document.getElementById("flexRadioDefault10");


    if (Default1El.checked) {
        soDuong();
    }
    if (Default2El.checked) {
        demSoDuong();
    }
    if (Default3El.checked) {
        TimMin();
    }
    if (Default4El.checked) {
        TimMinDuong();
    }
    if (Default5El.checked) {
        TimChanCuoi();
    } if (Default6El.checked) {
        DoiViTri();
    } if (Default7El.checked) {
        Sapxep();
    } if (Default8El.checked) {
        NguyenTo();
    } if (Default9El.checked) {
        demsoNguyen();
    } if (Default10El.checked) {
        demAmDuong();
    }

}

document.getElementById("add").addEventListener("click", ex1);
const numberss = [];
function ex1() {
    const number = +document.getElementById("inputNumber").value;
    numberss.push(number);
    console.log(numberss)

}
function soDuong() {
    let result = 0;
    for (let i = 0; i < numberss.length; i++) {
        const value = numberss[i];
        if (value > 0) {
            result += value
        }
    } document.getElementById("result").innerHTML = result;
}
function demSoDuong() {
    let result = 0;
    for (let i = 0; i < numberss.length; i++) {
        const value = numberss[i];
        if (value > 0) {
            result = numberss.length;
        } document.getElementById("result").innerHTML = result;
    }
}
function TimMin() {
    let result = 0;
    let min = numberss[0];
    for (let i = 0; i < numberss.length; i++) {
        const value = numberss[i];
        if (min > value) {
            min = value;
        } document.getElementById("result").innerHTML = min;
    }
}
function TimMinDuong() {
    let result = 0;
    let min = numberss[0];
    for (let i = 0; i < numberss.length; i++) {
        const value = numberss[i];
        if (min > value && value >= 0) {
            min = value;
        } document.getElementById("result").innerHTML = min;
    }
}
function TimChanCuoi() {
    const numEven = numberss.filter((value) => value % 2 == 0);
    const result = numEven[numEven.length - 1];
    document.getElementById("result").innerHTML = result;
}
function DoiViTri() {
    let value = [];
    const result1 = +document.getElementById("result1").value;
    const result2 = +document.getElementById("result2").value;

    value = numberss.splice(result1, 1, result2);
    document.getElementById("result").innerHTML = value;
}
function Sapxep() {
    let result = []
    result = numberss.sort((a, b) => a - b);
    document.getElementById("result").innerHTML = result;
}
function NguyenTo() {
    let result = 1;
    let value = numberss[0];
    for (i = 1; i < numberss.length; i++) {
        if (value < 2) {
            return -1;
        }
        if (value === 2) {
            return 1;
        }
        if (value % 2 === 0) {
            return -1;
        }
        for (j = 2; j <= value / 2; j += 2) {
            if (value % j === 0) {
                return 1;
            }
        }
        if (value = 1){
 value = result;
        }document.getElementById("result").innerHTML =result  ;
      
    } 
   
}   
function demsoNguyen (){
let result = 0;
for (let i = 0; i < numberss.length; i++){
    const value = numberss[i];
    if (value !== 0){
        result++;
    }
}
document.getElementById("result").innerHTML = result;
}function demAmDuong (){
let negativeNum = numberss[0];
let positiveNum = numberss[0];

for (let i=0; i< numberss.length; i++){
    const value = numberss[i];
    if (value < 0){
        negativeNum++;
    }
    if (value > 0){
        positiveNum++;
    }
}

if (positiveNum > negativeNum){
document.getElementById("result").innerHTML = `Số dương là ${positiveNum}, Số âm là ${negativeNum}, => Số dương > Số âm`;
}
if (positiveNum < negativeNum){
document.getElementById("result").innerHTML = `Số dương là ${positiveNum}, Số âm là ${negativeNum}, =>  Số dương < Số âm`;
}
}