let bookAdd = document.getElementById('book-add');
let ContentOverley = document.querySelector('.content-overley')
var PopUp = document.querySelector('.popup')
let Cancel = document.getElementById('cancel')
let DetailsAdd = document.getElementById('add')

bookAdd.addEventListener('click',()=>{
    ContentOverley.style.display='block';
    PopUp.style.display='block';
})
Cancel.addEventListener('click',()=>{
    ContentOverley.style.display='none';
    PopUp.style.display='none';
})

DetailsAdd.addEventListener('click',()=>{
    let Container = document.querySelector('.container')
    let div = document.createElement('div');
    div.className='box'
   let Name = document.getElementById('name')
   let Age = document.getElementById('age')
   let Email = document.getElementById('email')
   let Contact = document.getElementById('contact')
    
    let info =`
    <h1>User Deatails</h1>
    <h3>Name:    ${Name.value}</h3>
    <h3>Age:     ${Age.value}</h3>
    <h3>Email:     ${Email.value}</h3>
    <h3>Contact:     ${Contact.value}</h3>
    <button onclick="btnDel(event)">Delete </button>`;
console.log(div);
    div.innerHTML=info;
    Container.appendChild(div);
    ContentOverley.style.display='none';
    PopUp.style.display='none';
    Name.value ='';
    Age.value = '';
    Email.value='';
    Contact.value='';
})

function btnDel(e){
    e.target.parentElement.remove()
}