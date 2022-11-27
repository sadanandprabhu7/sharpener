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
    else if(localStorage.getItem(user_email.value) !==null)
    {
        message.textContent="this email is already register please use another email";
        user_email.value='';
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

        let items = document.querySelector('#users');
   let li = document.createElement('li');
   li.className='items';
   
   li.appendChild(document.createTextNode(nameV+' '+emailV));
   items.appendChild(li);
       
       user_name.value="";
       user_email.value="";
    }

}

Object.keys(localStorage).forEach((k) => {



    details = localStorage.getItem(k);
    //let li = document.createElement('li');
    detailsnew= JSON.parse(details);
    detailsnew1=JSON.stringify(details)
    console.log(${detailsnew1.name.value});
    
    
let items = document.querySelector('#users');
   let li = document.createElement('li');
   li.className='items';
   
   li.appendChild(document.createTextNode='${details.name}');
   items.appendChild(li);
    });
    