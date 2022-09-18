

let astagpheradd= document.querySelector(".astagpher-btn");
let alhamdoadd= document.querySelector(".alhamdo-btn");
let resetadd = document.querySelector(".reset-btn");
let astagphercount=0
let alhamdocount=0
let resetcount=0

function icreaseAstagpher(){
    astagphercount++;
    astagpheradd.innerHTML= astagphercount;
}
function icreaseAlhamdo(){
    alhamdocount++;
    alhamdoadd.innerHTML= alhamdocount;
}
function resetBtn(){
     alhamdocount=0
     astagphercount=0
     astagpheradd.innerHTML= astagphercount;
     alhamdoadd.innerHTML= alhamdocount;
}

astagpheradd.onclick=icreaseAstagpher;
alhamdoadd.onclick=icreaseAlhamdo;
resetadd.onclick=resetBtn;