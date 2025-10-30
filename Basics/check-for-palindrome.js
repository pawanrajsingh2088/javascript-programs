function check() {
            var str = document.getElementById("str").value;
            var rev = "";
            
            for(var i = str.length - 1; i >= 0; i--) {
                rev = rev + str[i];
            }
            
            if(str === rev) {
                document.getElementById("result").innerHTML = "'" + str + "' is a palindrome";
            } else {
                document.getElementById("result").innerHTML = "'" + str + "' is not a palindrome";
            }
        }