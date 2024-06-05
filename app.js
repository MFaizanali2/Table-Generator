// let table = prompt("enter your number");
// let length = table.length;
// length = prompt("Enter length")
// for(let i = 1; i <= length; i++){
//     console.log(`${table} X ${i} = ${table*i}`);
// }

function click(){
    let collect = document.getElementById("first").value;
    let some = collect.length;
     some = document.getElementById("second").value;
     for(let i = 1; i <= some; i++){
         let putdata = document.getElementById("Generator");
        //  console.log(putdata)
           putdata.value += `${collect} X ${i} = ${collect*i}`;
        
       
    }
}