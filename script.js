
function login() {
    

  
    var em=document.getElementById('i1').value;
    var password=document.getElementById('i2').value;
    var cp=document.getElementById('i3').value;
    var mn= document.getElementById('i4').value;
    var bd= document.getElementById('i5').value;
    var cod=document.getElementById('i6').value;
    var p1='devan';
    if(cod!=p1 && false)
    {
        alert('CODE IS NOT REGISTERED.\nPLEASE CONTACT OWNER');
        return false;
    }

    if (!em || !password || !cp || !mn || !bd) {
        alert('please fill out all fields');
        return false;
    }
    var emp= /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    var mnp = /^[0-9]{10}$/;
    
    var bd=document.getElementById('i5').value;
    var bd=new Date(bd);
    var today=new Date();
    var age = today.getFullYear() - bd.getFullYear();
    if(!emp.test(em))
    {
        alert('Please enter a valid Username');
        return false; 
    }
    else if(password!=cp)
    {
        alert('Password and confirm password not match');
        return false;
    }
    else if (!mnp.test(mn))
    {
        alert('Please enter a valid 10-digit mobile number');
        return false; 
    }
   else if (age<12) 
    {
        alert('Your Age Must Be Greater Than 12 for shopping');
        return false;
    }
    window.location.href='prod2.html';
}

function total123()
{
    
    var t1=document.getElementById('p1').value;
    var t2=document.getElementById('p2').value;
    var t3=document.getElementById('p3').value;
    var t4=document.getElementById('p4').value;
    var t5=document.getElementById('p5').value;
    var t6=document.getElementById('p6').value;
    var t7=document.getElementById('p7').value;
    var t8=document.getElementById('p8').value;
    var t9=document.getElementById('p9').value;
    var t10=document.getElementById('p10').value;
    var t11=document.getElementById('p11').value;
    var t12=document.getElementById('p12').value;
    var t13=document.getElementById('p13').value;
    var t14=document.getElementById('p14').value;
    var t15=document.getElementById('p15').value;
    var t16=document.getElementById('p16').value;
    var t17=document.getElementById('p17').value;
    var t18=document.getElementById('p18').value;
    var t=(t1*150000)+(t2*160000)+(t3*180000)+(t4*115000)+(t5*125000)+(t6*80000)+(t7*200000)+(t8*250000)+(t9*225000)+(t10*300000)+(t11*180000)+(t12*25000)+(t13*45000)+(t14*50000 )+(t15*100000)+(t16*5000)+(t17*2500)+(t18*3500);
    document.getElementById('dis10').innerText=t;
   
}
function order(){
    const str={
        1:'i-phone 15',
        2:'i-phone 15 max',
        3:'i-phone 15 pro max',
        4:'i-phone 14',
        5:'i-phone 14 pro',
        6:'i-phone 13',
        7:'13-inch MacBook Pro: Apple M2 chip',
        8:'Apple Macbook Air MD711HN/B 11-inch Laptop',
        9:'Apple Macbook M3',
        10:'Apple MacBook Air Laptop M1 chip',
        11:'Apple M4 MacBook Pro',
        12:'Mobile White Apple Earpods Pro',
        13:'Apple AirPods Pro (2nd Generation) with MagSafe Charging Case (USB-C)',
        14:'Apple TV 4K 32GB',
        15:'Apple 12.9 iPad Pro Wi-Fi + Cellular 256GB - Space Grey',
        16:'Plastic Premium 9H Apple Iphone Mobile Back Cover',
        17:'Laptop Skin for Apple MacBook',
        18:'Apple MFi Certified iPhone Charger | Dual Port USB Wall Plug Block'
        
    };
    var t1=document.getElementById('p1').value;
    var t2=document.getElementById('p2').value;
    var t3=document.getElementById('p3').value;
    var t4=document.getElementById('p4').value;
    var t5=document.getElementById('p5').value;
    var t6=document.getElementById('p6').value;
    var t7=document.getElementById('p7').value;
    var t8=document.getElementById('p8').value;
    var t9=document.getElementById('p9').value;
    var t10=document.getElementById('p10').value;
    var t11=document.getElementById('p11').value;
    var t12=document.getElementById('p12').value;
    var t13=document.getElementById('p13').value;
    var t14=document.getElementById('p14').value;
    var t15=document.getElementById('p15').value;
    var t16=document.getElementById('p16').value;
    var t17=document.getElementById('p17').value;
    var t18=document.getElementById('p18').value;
    var t=(t1*150000)+(t2*160000)+(t3*180000)+(t4*115000)+(t5*125000)+(t6*80000)+(t7*200000)+(t8*250000)+(t9*225000)+(t10*300000)+(t11*180000)+(t12*25000)+(t13*45000)+(t14*50000 )+(t15*100000)+(t16*5000)+(t17*2500)+(t18*3500);
    for (let i=1;i<=18;i++) {
        let id='p' + i;
        let iid='pi'+i;
        let element = document.getElementById(id).value;
        if(element!=0)
        {
            let newDiv=document.createElement('div');
            newDiv.id='dev123';
            newDiv.classList.add('dd12');
            newDiv.textContent=str[i]+'->'+document.getElementById('p'+i).value+'\n'+'\n';
            document.body.appendChild(newDiv);
            
                }
    }
   let newDiv=document.createElement('div');
            newDiv.classList.add('dd12');
            newDiv.textContent='Totla Price: ₹'+t ;
            document.body.appendChild(newDiv);
            const devan=document.getElementsByClassName('dd12');
            

        document.getElementById('d123456').style.display='initial';
}
function colo1(){
    const col=document.getElementById('col1');
    const cc=col.value;
    const bu=document.getElementsByClassName('d123');
    for(var i=0;i<bu.length;i++)
    {
        bu[i].style.backgroundColor=cc;
    }

}
function colo2(){
    var col12=document.getElementById('col2');
    const cc1=col12.value;
     const lm=document.getElementById('mby123');
     lm.style.backgroundColor=cc1;
}
   
function colo3(){
    const cold=document.getElementById('col3');
    const cc123=cold.value;
    const lm=document.getElementsByClassName('app1');
    for(var i=0;i<lm.length;i++)
    {
        lm[i].style.backgroundColor=cc123;

    }
}
function colo4(){
    var col=document.getElementById('col4');
    const cc1=col.value;
     const lm=document.getElementById('nav');
     lm.style.backgroundColor=cc1;
}
function colo5(){
    var col=document.getElementById('col5');
    const cc1=col.value;
    const lm=document.getElementById('sub1');
    lm.style.backgroundColor=cc1;
}
