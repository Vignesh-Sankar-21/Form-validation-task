
function check(){
    var box1= document.getElementById("box1").value;
var box2= document.getElementById("box2").value;
var errorshow=document.getElementById("errorshow")
    if((box1.length>4)&&(box2.length>5)||(box2.length<13)){
     errorshow.innerHTML="Login Successful"
     document.innerHTML=errorshow.style.color="green"
     

    }
    if(box1.length<4){
        errorshow.innerHTML="Invalid  : your username must contains atleast 4 letters"
        document.innerHTML=errorshow.style.color="red"
       
    }
    if(box2.length<6||box2.length>12){
        errorshow.innerHTML="Invalid password : your password must contains 6-12 characters"
        document.innerHTML=errorshow.style.color="red"
        
    }if(box2.length<6||box2.length>12&&box1.length<4){
        errorshow.innerHTML="Invalid username and password"

    }
    
    
}