let con=document.querySelectorAll(".con");
let computer=document.querySelectorAll(".computer");
// console.log(computer);
let user=document.querySelector(".user");
let pc=document.querySelector(".pc");

let option_line=document.getElementById("option-line");
let option_before=document.getElementById("option-before");
let option_after=document.getElementById("option-after");
let random=Math.floor(Math.random()*3)
// console.log(random);
con.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        // console.log(option_line);
        user.style.opacity="1";
        option_line.style.display="none"
        option_before.style.display="none"
        option_after.style.display="none"
        con.forEach((item)=>{
            item.style.display="none";
        })
        element.style.display="block";
        element.classList.add("show");
        setTimeout(()=>{
            pc.style.opacity="1";
            setTimeout(()=>{
                con[random].style.display="block";
                con[random].classList.add("right");
            },1000)
        },500)
    })
})

