// let table = prompt("enter your number");
// let length = table.length;
// length = prompt("Enter length")
// for(let i = 1; i <= length; i++){
//     console.log(`${table} X ${i} = ${table*i}`);
// }

function click(){
    let collect = document.getElementById("first");
    let some = collect.length;
     some = document.getElementById("second");
     let putdata = document.querySelector("#generator");
     for(let i = 1; i <= some.length; i++){
           putdata += `${collect} X ${i} = ${collect*i}`;
       
    }
}