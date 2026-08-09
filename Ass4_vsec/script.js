function checkPassword(){

let password = document.getElementById("password").value;

let confirm = document.getElementById("confirm").value;

let message = document.getElementById("message");


let upper = /[A-Z]/;
let lower = /[a-z]/;
let number = /[0-9]/;
let special = /[!@#$%]/;


if(password.length < 8){

    message.innerHTML="Password must be 8 characters";
}

else if(!upper.test(password)){

    message.innerHTML="Add one Uppercase letter";
}

else if(!lower.test(password)){

    message.innerHTML="Add one Lowercase letter";
}

else if(!number.test(password)){

    message.innerHTML="Add one Number";
}

else if(!special.test(password)){

    message.innerHTML="Add one Special character";
}

else if(password != confirm){

    message.innerHTML="Password not matched";
}

else{

    message.innerHTML="Password Created Successfully";
}

}