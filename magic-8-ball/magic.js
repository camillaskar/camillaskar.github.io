(function () {

    console.log("hello");
    console.log("init");

    (function (){

    let buttone = document.getElementById("btn");
    console.log("check" + buttone);
    buttone.addEventListener('click', function() {
        console.log("button clicked");
        let text = document.getElementById("teext");
        text.textContent=random();

       });
    })();

    const responses = ["keep up", "no", "dont even think", 
"very doubtful", "outlook good", "my sources say no", 
"it is decidedly so", "dont count on it", "it is certain", 
"ask again later", "reply hazy, try again", "outlook not so good", 
"cannot predict now", "better not tell you now", "definetely - yes", "most likely"];
const lastfive=[];
lastfive.length=4;

    function random(){
        const random = Math.floor(Math.random() * responses.length);
  let result=responses[random];
  console.log(result);
  return(result);
    }

})();