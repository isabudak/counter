const sil= document.getElementById('button-one');
const sifirla= document.getElementById('button-two');
const ekle= document.getElementById('button-three');

let count=0;

sil.onclick=function(){
    count-=1;
    document.getElementById('value').innerHTML=count;
}

sifirla.onclick=function(){
    count=0;
    document.getElementById('value').innerHTML=count;
    document.body.style('background-color','blue')
}

ekle.onclick=function(){
    count+=1;
    document.getElementById('value').innerHTML=count;
}
