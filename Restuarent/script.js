const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box');
const searchText = document.getElementById('search');

   
searchText.addEventListener('keyup',(e)=>{

    
    search = e.target.value.toLowerCase().trim();
    
    buttons.forEach((btn)=>{
        btn.classList.remove('active');
    })

    buttons[0].classList.add('active');
    boxes.forEach((box)=>{
        console.log(box);
        let data = box.dataset.item;
        
        if(data.includes(search)){
            
            box.style.display='block'
        }else{
            
            box.style.display='none'
            
        }
    })
});
 
buttons.forEach((btn)=>{
   
    btn.addEventListener('click',(e)=>{
        // e.preventDefault();
           let btnFilter = e.target.dataset.filter;
      
        boxes.forEach((box)=>{
            let boxFilter = box.dataset.item;

           
            if(btnFilter==='all'){
                box.style.display = 'block'
            }else{
              if(btnFilter===boxFilter){
                box.style.display = 'block';
                



              }else{
                box.style.display = 'none'

              }   
            }
        })
        classAdd()
    })



})
function classAdd(){
    buttons.forEach((btn)=>{
        btn.classList.remove('active');
        btn.addEventListener('click',(e)=>{

            btn.classList.add('active')
        })
    
    })
       ;
}


   