// function validation(){
//     var form=document.getElementById("form");
//     var email=document.getElementById("email");
//     var text=document.getElementById("text");
//     var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

//     if(email.match(pattern)){
//         form.classList.add('valid');
//         form.classList.add('invalid');
//         text.innerHTML='თქვენი მეილი სწორია';
//         text.style.color='#00ff00';
//     }
//     else{
//         form.classList.remove('valid');
//         form.classList.add('invalid');
//         text.innerHTML='გთხოვთ შეიყვანეთ მეილი'
//         text.style.color='#ff0000'
//     }
//     if(email==""){
//         form.classList.remove('valid');
//         form.classList.add('invalid');
//         text.innerHTML=""
//         text.style.color='#00ff00'
//     }
// }
function validation(){


text=document.getElementById('text1').value
var regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;

if(regx.test(text)){
    document.getElementById('lbltext').innerHTML='Email Confirm '
    document.getElementById('lbltext').style.visibility='visible'
    document.getElementById('lbltext').style.color='green'
}
else if(text=''){
    document.getElementById('lbltext').innerHTML='Please Enter Email'
    document.getElementById('lbltext').style.visibility='visible'
    document.getElementById('lbltext').style.color='red'
}
else{
    document.getElementById('lbltext').innerHTML='Please Enter Email'
    document.getElementById('lbltext').style.visibility='visible'
    document.getElementById('lbltext').style.color='red'
}
}



function password(){

    var password1=document.querySelector('.password').value
    var confirm_password=document.querySelector('.confirm_password').value

if(confirm_password!=password1){
    document.getElementById('password_text').innerHTML='Please confirm password'
    document.getElementById('password_text').style.visibility='visible'
    document.getElementById('password_text').style.color='red'
}
else if(password1==''){
    document.getElementById('password_text').innerHTML='Please Enter password'
    document.getElementById('password_text').style.visibility='visible'
    document.getElementById('password_text').style.color='red'
}
else {
    document.getElementById('password_text').innerHTML='Password Confirm '
    document.getElementById('password_text').style.visibility='visible'
    document.getElementById('password_text').style.color='green'
}
}
function password_complexity(){

    
    text1=document.getElementById('text2').value

password2=document.querySelector('.password').value
    var letter=/[a-zA-Z0-9]/
    // var numbers= /[a-zA-Z0-9]/g
   numbers=/[0-9]/
  
   

  if(letter.test(text1)){
        
    document.getElementById('password_difficult').innerHTML='middle'
    document.getElementById('password_difficult').style.visibility='visible'
    document.getElementById('password_difficult').style.color='orange'
}
     else if(numbers.test(text1)){
        document.getElementById('password_difficult').innerHTML='easy'
        document.getElementById('password_difficult').style.visibility='visible'
        document.getElementById('password_difficult').style.color='green'

        
    }

     
     if(password2==''){
        
        document.getElementById('password_difficult').innerHTML='Please Enter Password'
        document.getElementById('password_difficult').style.visibility='visible'
        document.getElementById('password_difficult').style.color='red'
    }
     
    
}


