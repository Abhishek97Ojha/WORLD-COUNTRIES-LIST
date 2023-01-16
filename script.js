let para = document.getElementById("para");
let subPara = document.getElementById("subPara");

let start = document.getElementById("start");
let anyWord = document.getElementById("any");
let inputBox = document.getElementById("inputBox");
let searches = document.getElementById("search");
let bottom = document.getElementById("bottom");
let countryName = [];
countries_data.map((ele) => {
    // console.log(ele.name);
    countryName.push(ele.name.toLowerCase())
})
let country = countryName.sort(function (a, b) {
    let x = a;
    let y = b;
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
})
// console.log(country);
function world() {
    country.map((ele) => {
        bottom.innerHTML +=
            `<div class="card"><p>${ele.toUpperCase()}</p></div>`
        para.innerText = `Total Number of Countries : ${country.length}`;
    })
    // console.log(countryName);
}
function starting() {
    bottom.innerHTML = "";
    anyWord.style.backgroundColor = "";
    start.style.backgroundColor = "blue";
    console.log("starting");
    // searches.setAttribute("onclick", "search()")
    subPara.innerHTML = "";
    inputBox.setAttribute("onkeyup", "starting()");
    let matchCountry = [];
    countryName.map((ele) => {
        let hello = ele.startsWith(inputBox.value.toLowerCase())
        //  console.log(hello);
        if (inputBox.value == "") {
            bottom.innerHTML = `<h1>Please Enter a word</h1>`
        }
        else {
            if (hello) {
                matchCountry.push(ele);
                bottom.innerHTML +=
                    `<div class="card"><p>${ele.toUpperCase()}</p></div>`
                subPara.innerText = `Countries start with "${inputBox.value}" are "${matchCountry.length}"`
            }
        }
    })
    // searches.removeAttribute("onclick");
    inputBox.removeAttribute("onkeyup");
    start.style.backgroundColor = "";




}
function any() {
    bottom.innerHTML = "";
    anyWord.style.backgroundColor = "blue";
    start.style.backgroundColor = "";
    console.log("any");
    // searches.setAttribute("onclick", "searching()")
    subPara.innerHTML = "";
    bottom.innerHTML = "";
    inputBox.setAttribute("onkeyup", "any()");
    let matchCountry = [];
    countryName.map((ele) => {
        let hello = ele.includes(inputBox.value.toLowerCase())
        //  console.log(hello);
        if (inputBox.value == "") {
            bottom.innerHTML = `<h1>Please Enter a word</h1>`
        }
        else {
            if (hello) {
                matchCountry.push(ele);
                bottom.innerHTML +=
                    `<div class="card"><p>${ele.toUpperCase()}</p></div>`
                subPara.innerText = `Countries containing "${inputBox.value}" are "${matchCountry.length}"`
            }
        }
    })
    // inputBox.value = "";
    // searches.removeAttribute("onclick");
    inputBox.removeAttribute("onkeyup");
    anyWord.style.backgroundColor = "";


}




// function search() {
//     inputBox.setAttribute("onkeyup", "starting()");
//     let matchCountry = [];
//     countryName.map((ele) => {
//         let hello = ele.startsWith(inputBox.value.toLowerCase())
//         //  console.log(hello);
//         if (inputBox.value == "") {
//             bottom.innerHTML = `<h1>Please Enter a word</h1>`
//         }
//         else {
//             if (hello) {
//                 matchCountry.push(ele);
//                 bottom.innerHTML +=
//                     `<div class="card"><p>${ele.toUpperCase()}</p></div>`
//                 subPara.innerText = `Countries start with "${inputBox.value}" are "${matchCountry.length}"`
//             }
//         }
//     })
//     inputBox.value = "";
//     searches.removeAttribute("onclick");
//     inputBox.removeAttribute("onkeyup");
//     start.style.backgroundColor = "";

// }
// function searching() {
//     bottom.innerHTML = "";
//     inputBox.setAttribute("onkeyup", "any()");
//     let matchCountry = [];
//     countryName.map((ele) => {
//         let hello = ele.includes(inputBox.value.toLowerCase())
//         //  console.log(hello);
//         if (inputBox.value == "") {
//             bottom.innerHTML = `<h1>Please Enter a word</h1>`
//         }
//         else {
//             if (hello) {
//                 matchCountry.push(ele);
//                 bottom.innerHTML +=
//                     `<div class="card"><p>${ele.toUpperCase()}</p></div>`
//                 subPara.innerText = `Countries containing "${inputBox.value}" are "${matchCountry.length}"`
//             }
//         }
//     })
//     inputBox.value = "";
//     searches.removeAttribute("onclick", "");
//     inputBox.removeAttribute("onkeyup");
//     anyWord.style.backgroundColor = "";

// }

// function find() {
//     if (inputBox.value == "") {
//         bottom.innerHTML = `<h1>Please Enter a word</h1>`
//     }
//     else {
//         bottom.innerHTML = "";
//         inputBox.addEventListener("keyup", input);
//         let matchCountry = [];
//         countryName.map((ele) => {
//             let hello = ele.includes(inputBox.value.toLowerCase())
//             console.log(hello);
//             if (inputBox.value == "") {
//                 bottom.innerHTML = `<h1>Please Enter a word</h1>`
//             }
//             else {
//                 if (hello) {
//                     matchCountry.push(ele);
//                     bottom.innerHTML +=
//                         `<div class="card"><p>${ele.toUpperCase()}</p></div>`
//                     subPara.innerText = `Countries containing "${inputBox.value}" are "${matchCountry.length}"`
//                 }
//             }


//         })
//         inputBox.value = "";
//     }

// }
// function input() {
//     bottom.innerHTML = "";
//     anyWord.style.backgroundColor = "";
//     start.style.backgroundColor = "";
//     // console.log("any");
//     searches.addEventListener("click",find)
//     subPara.innerHTML = "";
// }

