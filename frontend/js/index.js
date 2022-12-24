

function validateForm() {
    // window.location.href = "google.com";

  
    // console.log(baseurl)
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        if(password!="a"){
            alert("Wrong password");
            return false;
        }

        if(username=="anh"){
            localStorage.setItem("userId", 3);
        }else if(username=="tien"){
            localStorage.setItem("userId", 1);
        }else if(username=="phuong"){
            localStorage.setItem("userId", 2);
        }else if(username=="nam"){
            localStorage.setItem("userId", 4);
        }else{
            alert("Wrong password");
            return false;
        }


        window.location.href = "chat-app.html";

        return false;

}

