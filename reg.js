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
        localStorage.setItem('name',nameV)
        localStorage.setItem('email',emailV)
       user_name.value="";
       user_email.value="";
    }

}