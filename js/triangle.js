// const row = [0, 1, 2, 3]
// const col = [0, 1, 2, 3, 4, 5, 6]

// function printTriangle(){
//     for (let i = 0; i < row.length; i++) {
//         console.log(" ");
//         for (let j = 0; j < col.length; j++) {
//                 console.log("*");
//         }
//     }
// }

// printTriangle()

function hashTriangle(length) {
    let str = "";
    for (let i = 0; i < length; i++) {
        str += "#";
        console.log(str);
    }
}
hashTriangle(7);