let em = prompt('Enter your email, please!')
let emMinLength = 5;
let passMinLength = 6;
let pass;
let changepass;
let oldpass;
let newpass;
let validnewpass;
if (em ==='' ||em === null){
    alert('Canceled');
} else if (em.length<emMinLength){
    alert("I don't know any emails having name length less than 5 symbols");
} else if (em==='user@gmail.com'||em==='admin@gmail.com'){
     pass = prompt('Enter your password, please!');
} else {
    alert("I don't know you");
}
if (pass ===''|| pass===null){
    alert('Canceled');
} else if (em==='user@gmail.com'&&pass==='UserPass'||em==='admin@gmail.com'&&pass==='AdminPass'){
     changepass = confirm('Do you want to change your password?');
    if (changepass===false){
        alert('You have failed the change');
    } else {
         oldpass = prompt('Write your old password');
        if (oldpass ===''|| oldpass ===null){
            alert('Canceled');
        } else if (em==='user@gmail.com'&&pass==='UserPass'||em==='admin@gmail.com'&&pass==='AdminPass'){
             newpass = prompt('Enter your new password');
            if (newpass ===''|| newpass ===null){
                alert('Canceled');
            } else if (newpass.length<passMinLength){
                alert("It's too short password.Sorry");
            } else{
                 validnewpass = prompt('Enter your new password again, please');
                if (validnewpass ===''|| validnewpass ===null){
                    alert('Canceled');
                } else if (validnewpass!==newpass){
                    alert("Passwords aren't same");
                } else{
                    alert('You have succsesfully changed your password');
                }
            }
        }
    }   
}
