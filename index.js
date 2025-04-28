let con=document.querySelectorAll(".con");
let computer=document.querySelectorAll(".computer");
// console.log(computer);
let user=document.querySelector(".user");
let pc=document.querySelector(".pc");
let win_model=document.querySelector(".win-model");
let winner=document.querySelector(".winner");
let option_line=document.getElementById("option-line");
let option_before=document.getElementById("option-before");
let option_after=document.getElementById("option-after");
let play=document.querySelector(".play");
let computer_score=document.getElementById("computer-score")
let Our_score=document.getElementById("our-score")
let score=JSON.parse(localStorage.getItem("score"))
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
                computer[random].style.display="block";
                computer[random].classList.add("right");
            },1000);
            setTimeout(()=>{
                if(index==random){
                    win_model.style.display="grid";
                    winner.innerText="TIE UP";
                    play.innerText="REPLAY"
                }
                else if(index==0 && random==2 || index==1 && random==0|| index==2&& random==1){
                    win_model.style.display="grid";
                    winner.innerText="YOU WIN";
                }else{
                    win_model.style.display="grid";
                    winner.innerText="YOU LOOSE";
                }
            })
        },500)
    })
})
play.addEventListener("click",()=>{
    window.location.reload();
})
