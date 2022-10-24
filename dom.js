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
let headerBorder = document.getElementById('header-title');
headerBorder.style.border='solid black 3px';

let bold = document.getElementsByClassName('title');
bold[0].style.fontWeight='bold';
bold[0].style.color='green';

// let items = document.getElementsByClassName('list-group-item');
// items[2].style.background='green';
// for(let key of items)
// {
//     key.style.fontWeight='bold';
// }

for(let i=0; i<items.length; i++)
{
    items[i].style.fontWeight='bold';
}

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

let second = document.querySelector('li:nth-child(2)');
second.style.background='green';

let third = document.querySelector('li:nth-child(3)');
third.style.visibility='hidden';

let liitems = document.querySelectorAll('li');
console.log(liitems);
liitems[1].style.color='green';
let odd = document.querySelectorAll('li:nth-child(odd)');
for(let key of odd)
{
    key.style.background='green';
}

