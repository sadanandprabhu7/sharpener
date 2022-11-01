const submit = document.getElementById('submit');

submit.addEventListener('click',addDetails);
function addDetails(e)
{
e.preventDefault();

let amount=document.getElementById('amount').value;
let description=document.getElementById('description').value;
let categoryName=document.getElementById('category').value;

const obj={
    amount,
    description,
    categoryName
}
const objValues=JSON.stringify(obj)
console.log('mypage');
localStorage.setItem(obj.amount,objValues)

//showDeatils(localStorage);

}
window.addEventListener('DOMContentLoaded',()=>{
const details=Object.keys(localStorage);
for(let i=0; i<details.length; i++)
{
    let key = details[i];
    let usersDeatils=localStorage[key];
    let user=JSON.parse(usersDeatils);
    showDeatils(user);
}


});


function showDeatils(user)
{
    document.getElementById('amount').value='';
    document.getElementById('description').value='';
    document.getElementById('category').value='';

    const parentNode=document.getElementById('list');
    const li =`<li>${user.amount} ${user.description} ${user.categoryName}  
    <button onclick=edit('${user.amount}','${user.description}','${user.categoryName}')>Edit</button>
    <button onclick=deleteUser('${user.amount}')>Delete</button></li>`;
    parentNode.innerHTML=parentNode.innerHTML+li;
}
function edit(amountU,descriptionU,categoryU)
{
    document.getElementById('amount').value=amountU;
    document.getElementById('description').value=descriptionU;
    document.getElementById('category').value=categoryU;

}

function deleteUser(deleteU)
{
    localStorage.removeItem(deleteU);
    clearscreen(deleteU)
}

function clearscreen(deleteU)
{
    const newparenetNode =document.getElementById('list');
    const removes = document.getElementById(deleteU);
    if(removes)
    {
    newparenetNode.remove(removes)
    }

}