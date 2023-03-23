const form = document.querySelector('form');
const list = document.querySelector('#list');
 
form.addEventListener('submit', function (e){
    e.preventDefault();
    const name = form.elements.product;
    const qty = form.elements.qty;
    const pro = document.createElement('li');
    pro.innerText = (`${name.value} ${qty.value}s`);
    list.appendChild(pro);
    name.value ='';
    qty.value ='';
});
