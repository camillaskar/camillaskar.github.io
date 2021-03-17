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
            if (!isZeroLengths(inputname) && !isZeroLengths(inputlast) && !isZeroLengths(inputuser) && checkPassword(inputpassword) && checkConfirm (inputconfirm, inputpassword)){
                success.textContent = "You have successfully registered!"; 
                inputname.value = " "; 
                inputlast.value = " "; 
                inputuser.value = " "; 
                inputpassword.value = " "; 
                inputconfirm.value= " ";
            } else {
                success.textContent = " ";
            }
            });
        
        let mycheck = document.getElementById("mycheck"); 
        mycheck.addEventListener('change', function(e) {
            if (e.target.checked){
                inputpassword.type = "text";
                inputconfirm.type = "text";
                console.log("anything");
            } else{
                inputpassword.type = "password";
                inputconfirm.type = "password";
                console.log("not true"); 
            }
        });

    })();
    function isZeroLengths(input){
        let isZeroLength = input.value.length == 0;
        if (isZeroLength){
            input.style.border = "2px solid #FF0000";
        } else {
            input.style.border = "1px solid #babdbb" ;
        }
        return isZeroLength;
        };
    
        function checkPassword(enter){
            var letternumber = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g;
            if (enter.value.length > 8){
                if (enter.value.match(letternumber)){
                    enter.style.border = "1px solid #babdbb";
                    console.log("it works");
                    return true;
                }
            } 
            enter.style.border = "2px solid #FF0000";
            return false;  
        }

    function checkConfirm(enterCon, enterPass){
        console.log(enterCon.value + " ff  " + enterPass.value);
        if (enterCon.value.match(enterPass.value)){
            enterCon.style.border = "1px solid #babdbb";
            return true;  
        } 
        enterCon.style.border = "2px solid #FF0000";
            return false;  
    }



})();