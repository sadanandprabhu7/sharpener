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
       console.log(Object.keys(obj));
        localStorage.setItem(obj.email,JSON.stringify(obj))
       
       user_name.value="";
       user_email.value="";
    }

}

Object.keys(localStorage).forEach((k) => {



    stringifiedDetailsOfPeople = localStorage.getItem(k);
    
    detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
    
    
    
    let items = document.querySelector('#users');
   let li = document.createElement('li');
   li.className='items';
   li.appendChild(document.createTextNode(JSON.stringify(detailsOfPeople)));
   items.appendChild(li);
    
    });