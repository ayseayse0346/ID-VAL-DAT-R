document.querySelector(".btn").onmouseover=function(){
    document.querySelector(".btn").style.color="black";
}

document.querySelector(".btn").onmouseout=function(){
    document.querySelector(".btn").style.color="white";
}


document.querySelector(".btn").onclick=function(){
const tcno = document.querySelector("#tcno").value;
    if (tcno.length !== 11) {
        alert("lütfen tc numaranızı 11 haneli olarak giriniz!")
    }else if(tcno[0] === "0") {
        alert("lütfen başında sıfır olmadan tc numaranızı giriniz!")
    }
    else{
        alert("başarılı bir giriş yaptınız...") 
       
    }
  }


