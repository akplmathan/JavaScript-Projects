const hrs = document.querySelector('.hrs');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const Digital = document.querySelector('.digi')
const color =document.querySelector('.color');

let arr = [1,2,3,4,5,6,7,8,9,"a","b",'c','d','e','f'];
function change(){
    let value; let random;
    function  indexarray(){
     random =arr[Math.floor(Math.random()*15)];
    return random;
    
    
}

value="#";
    for(let i=1;i<=6;i++){
        

        value+=indexarray();

    }console.log(value);
    
        clock.style.setProperty('--bgcolor',value)
     
}
setInterval(() => {
    change();
    
}, 500);

const clock =document.querySelector('.clock');
console.log(color);
setInterval(ClockStart,1);

 
 setInterval(setColor,1);


function ClockStart(){
   
        const Time = new Date();
        const Seconds = (Time.getSeconds())/60;
        let Minutes = (Seconds+Time.getMinutes())/60;
        let Hours = (Minutes+Time.getHours())/12;

        //justforshowing Digital /60 **************************

        let SV = Time.getSeconds();
        let MV = Time.getMinutes();
        let HV = Time.getHours();

sec.style.setProperty('--rotation',Seconds*360);
min.style.setProperty('--rotation',Minutes*360);
hrs.style.setProperty('--rotation',Hours*360);
 

    if(HV>12){
        HV -=12;
        HV<10? H ="0"+HV:H = HV;
        MV<10? M ="0"+MV:M = MV;
        SV<10? S ="0"+SV:S = SV;
        DigitalTime = H+":"+M+":"+S+" PM";
        Digital.innerHTML= DigitalTime;
    }else{
        HV<10? H ="0"+HV:H = HV;
        MV<10? M ="0"+MV:M = MV;
        SV<10? S ="0"+SV:S = SV;
        DigitalTime = H+":"+M+":"+S+" AM";
        Digital.innerHTML= DigitalTime;
    }
    

}
ClockStart()