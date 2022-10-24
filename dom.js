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

let items = document.getElementsByClassName('list-group-item');
items[2].style.background='green';
// for(let key of items)
// {
//     key.style.fontWeight='bold';
// }

for(let i=0; i<items.length; i++)
{
    items[i].style.fontWeight='bold';
}