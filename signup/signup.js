(function(){

  

    (function(){

        let inputname = document.getElementById("name");
        let inputlast = document.getElementById("lastname");
        let inputuser = document.getElementById("username");
        let inputpassword = document.getElementById("password");
        let inputconfirm = document.getElementById("confirm");
        let signup = document.getElementById("signup");

        signup.addEventListener('click', function() {
            let success = document.getElementById("success");
            if (!checkLength(inputname) && !checkLength(inputlast) && !checkLength(inputuser) && !checkLength(inputpassword) && !checkLength(inputconfirm)){
                success.textContent = "You have successfully registered!"; 
            } else {
                success.textContent = " ";
            }
            });

    })();
    function checkLength(input){
        let isZeroLength = input.value.length == 0;
        if (isZeroLength){
            input.style.border = "2px solid #FF0000";
        } else {
            input.style.border = "1px solid #babdbb" ;
        }
        return isZeroLength;
        };



})();