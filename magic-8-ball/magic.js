(function () {

    console.log("hello");
    console.log("init");

    (function (){

    let buttone = document.getElementById("btn");
    buttone.disabled = true;
    console.log("check" + buttone);
    let inputtext = document.getElementById("que");

    buttone.addEventListener('click', function() {
        console.log("button clicked");
        let res = document.getElementById("teext");
        res.textContent = " Question: " + inputtext.value + "     Answer: " + randomly();
        inputtext.value=" ";
        buttone.disabled = true;
       });

       inputtext.addEventListener('input', function(e){
           if (e.target.value.length > 0){
            buttone.disabled = false;
           } else{
            buttone.disabled = true;
           }
       });
    })();

    const responses = ["keep up", "no", "dont even think", "very doubtful", "outlook good", "my sources say no", "it is decidedly so", "dont count on it", "it is certain", "ask again later", "reply hazy, try again", "outlook not so good", "cannot predict now", "better not tell you now", "definetely - yes", "most likely"];
    const lastfive = [];
    function randomly() {
        const random = Math.floor(Math.random() * responses.length);
        let result = responses[random];
        
        if (lastfive.includes(result)) {
            return randomly();
        }
        else {
            if (lastfive.length == 5) {
                lastfive.length = 0;
            }
            let neew=lastfive.push(result);
            console.log("kk" + lastfive);
            return(result);
        }
    }
    
    })();
