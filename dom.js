//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent='hello';
//console.log(document.forms[0]);
//console.log(document.links[0]);
//console.log(document.images);
//console.log(document.getElementById('header-title'));
// var header = document.getElementById('header-title');
// console.log(header.innerText);
// console.log(header.textContent);
// console.log(header.innerHTML);
// header.textContent='hi';
// header.innerHTML='bye';
//console.log(document.title);
// let headerBorder = document.getElementById('header-title');
// headerBorder.style.border='solid black 3px';

// let bold = document.getElementsByClassName('title');
// bold[0].style.fontWeight='bold';
// bold[0].style.color='green';

// let items = document.getElementsByClassName('list-group-item');
// items[2].style.background='green';
// for(let key of items)
// {
//     key.style.fontWeight='bold';
// }

// for(let i=0; i<items.length; i++)
// {
//     items[i].style.fontWeight='bold';
// }

// let newItem = document.getElementsByTagName('li');
// console.log(newItem);
// for(let key of newItem)
// {
//     key.style.color='blue';
// }

// let input = document.querySelector('input')
// input.value="hello world";

// let submit = document.querySelector('input[type="submit"]');
// submit.value='Send';

// let items1 = document.querySelector('.list-group-item')
// items1.style.color='red';
// let lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color='blue';
// let second = document.querySelector('.list-group-item:nth-child(3)')
// second.style.color='red';

// let titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent="sadanand";


// let even = document.querySelectorAll('li:nth-child(even)');
// for(let key of even)
// {
//     key.style.background='grey';
// }

// let second = document.querySelector('li:nth-child(2)');
// second.style.background='green';

// let third = document.querySelector('li:nth-child(3)');
// third.style.visibility='hidden';

// let liitems = document.querySelectorAll('li');
// console.log(liitems);
// liitems[1].style.color='green';
// let odd = document.querySelectorAll('li:nth-child(odd)');
// for(let key of odd)
// {
//     key.style.background='green';
// }

// parentNode and parentElement is same//
// let items = document.querySelector('#items');
// console.log(items.parentNode.parentNode.parentNode.parentNode);
// items.parentNode.style.background='grey';
// items.parentElement.parentElement.style.background='yellow';

//child node 
//is list of items which is node but it also conatin
// line break of space in items list array so not much useable
// instead of we can use children
//children 
//is not node it is html collection
// it avoid text and white spaces
// shows only children
// we can access each element using index

//console.log(items.childNodes);
// console.log(items.children);
// items.children[1].style.background='blue';

//firstChild also represent text so useless
// console.log(items.firstChild);

// instead of firstElementChild 
//can be use to access first element of items
// console.log(items.firstElementChild.style.color='red');

// same thing with lastChild and lastElementChild

// console.log(items.nextSibling);
// console.log(items.nextElementSibling)
// console.log(items.previousSibling);
// console.log(items.previousElementSibling.textContent='hello');

// var div = document.createElement('div');

// div.className="hello";
// div.id='hello2';

// div.setAttribute('title','new div');

//  let divtext = document.createTextNode('hello world');
//  div.appendChild(divtext);
//  console.log(div);

//  let container = document.querySelector('header .container')
//  let h1 = document.querySelector('header h1');

//  container.insertBefore(div,h1);

//  let item = document.getElementById('items')
 
// item.innerHTML ='<li>hello world</li>'+item.innerHTML;

 let form = document.getElementById('addForm')
 let itemList = document.getElementById('items')
 //console.log(itemList);

 form.addEventListener('submit', addItem);

 function addItem(e)
 {
    e.preventDefault();
    //console.log(1);

    // get input value
    let newItem = document.getElementById('item').value;
    // adding description for items
    let des = document.getElementById('des').value;

    //create new li
    let li = document.createElement('li');

    //add li to its class
    li.className='list-group-item';
    //add node to input value
    li.appendChild(document.createTextNode(newItem));
    //adding descriptin to li
    li.appendChild(document.createTextNode(' '+des));
    //adding new li to itemList
    itemList.appendChild(li);
    //console.log(li);
    // adding delte button
    let deleteBtn = document.createElement('button');
    ///adding delete button to its class
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    /// adding text to delete button 
    deleteBtn.appendChild(document.createTextNode('x'));
    ///apending delete button to every li
    li.appendChild(deleteBtn);

    // adding edit button
    let editBtn = document.createElement('button');
    //adding edit button to its class
    editBtn.className='btn btn-danger btn-sm float-right delete';
    //adding text to edit button
    editBtn.appendChild(document.createTextNode('Edit'));
    ///appending edit button to li
    li.appendChild(editBtn);

    
 }

 itemList.addEventListener('click', removeItem);

 function removeItem(e)
 {
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure?'))
        {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
 }

 let filter = document.getElementById('filter')

 filter.addEventListener('keyup',filterItems);

 function filterItems(e)
 {
    let text=e.target.value.toLowerCase();
    let items =itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item)
    {
        let itemName=item.firstChild.textContent;
        let role = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) !=-1 || role.toLowerCase().indexOf(text) !=-1)
        {
            item.style.display='Block';  
        }
        else
        {
            item.style.display='none';
        }
    });
 }



