(function containsClass(){
    const doc = document.documentElement; 
    console.log("good");
//function containsClass() {
    let el = doc.getElementsByClassName("column");
console.log(" kk " + el);

    (el==null) ? console.log("bye") : console.log("hello");
//    if (el == null) {
//         console.log("bye");
//     }
//     else{
//         console.log("hello");
//     }
 // }

  
})();