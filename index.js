// (function containsClass(){
//     const doc = document.documentElement; 
//     console.log("good");
// //function containsClass() {
//     let el = doc.getElementsByClassName("column");
// console.log(" kk " + el);

//     (el==null) ? console.log("bye") : console.log("hello");
// //    if (el == null) {
// //         console.log("bye");
// //     }
// //     else{
// //         console.log("hello");
// //     }
//  // }
// })();

function string() {
    var person = prompt("Please enter your question");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }