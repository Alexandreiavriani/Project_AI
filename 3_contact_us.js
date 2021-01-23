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