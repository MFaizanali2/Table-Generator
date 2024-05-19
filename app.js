// let table = prompt("enter your number");
// let length = table.length;
// length = prompt("Enter length")
// for(let i = 1; i <= length; i++){
//     console.log(`${table} X ${i} = ${table*i}`);
// }

function click(){
    let collect = document.getElementById("first").value;
    let length = document.getElementById("second").value;
    let putdata = document.getElementById("generator");
    for(let i = 1; i <= length; i++){
           putdata.value += collect*i;
    }
}