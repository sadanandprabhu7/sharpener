let submit =document.getElementById('submit');

submit.addEventListener('click',onSubmit);
let user_name =document.getElementById('name');
let user_email=document.getElementById('email');
let message = document.querySelector('.msg')

function onSubmit(e)
{
    e.preventDefault();
    //console.log(1);
    if(user_name.value==="" || user_email.value==="")
    {
        message.textContent="plz fill";
    }
    else
    {
        let nameV = user_name.value;
        let emailV = user_email.value;
        const obj ={
            name:nameV,
            email:emailV
        }
        let myobj = JSON.stringify(obj);
        localStorage.setItem('obj',myobj)
       
       user_name.value="";
       user_email.value="";
    }

}