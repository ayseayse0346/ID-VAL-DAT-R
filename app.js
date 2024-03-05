// selectors


const input = document.getElementById("ID")

const check = document.querySelector(".btn ")



const checkappend = document.querySelector(".checkıd")





// sayfa yenilendiğinde domcontentloaded ile input olan yere fokuslansın kullanıcıya kılaylık açısından  
document.addEventListener("DOMContentLoaded", () => {
    input.focus()

// tc kimlik 11 haneli olmlaı

check.addEventListener("click", () => {
    if (input.value.length != 11 ) {
        if(checkappend.children.length>0){
            checkappend.removeChild()
        }

        const uyarı = document.createElement("p")
        uyarı.textContent = "Lütfen 11 haneli tc numaranızı giriniz.."
        checkappend.appendChild(uyarı)
        uyarı.style.backgroundColor = "yellow"
        uyarı.style.fontSize = "20px"
        uyarı.style.borderRadius= "10px"
        uyarı.style.border="2px solid black"
        uyarı.style.color="red"
        input.value = ""
        input.focus()
       

    }else {

        const uyarı = document.createElement("p")
        uyarı.textContent = " Tebrikler başarılı bir giriş yaptınız..."
        checkappend.appendChild(uyarı)
        uyarı.style.backgroundColor = "green"
        uyarı.style.fontSize = "20px"
        uyarı.style.borderRadius= "10px"
        uyarı.style.border="2px solid black"
        uyarı.style.color="brown"
        input.value = ""
        input.focus()
    }
})

})

// check butonunun mouse üzerine geldiğinde  ve ayrıldığında yapılacak işlemler 
// onmouseover-->üzerine gelindiğinde 

check.addEventListener("mouseover", () => {
    check.style.color = "black"
    check.style.cursor = "pointer"
    check.style.fontSize = "20px"

})
// onmouseout--> üzerinden ayrıldığında 

check.addEventListener("mouseout", () => {
    check.style.color = "white"
    check.style.fontSize = "16px"
})


//  eklediğimiz p elemnetinin silinmesi

input.addEventListener("change",()=>{
   if(checkappend.children.length>0) {
    document.querySelector(".checkıd p").remove()}
})

document.addEventListener("keydown",(e)=>{
if(e.key==="Enter"){
    check.click();
}
})