const text ="I am Sadanand and love to code in javascript <3"

let index = 0;

function writeText()
{
    document.body.innerText =text.slice(0,index)
    index++;

    if(index > text.length)
    {
        index=0;
    }
}
setInterval(writeText,100)
