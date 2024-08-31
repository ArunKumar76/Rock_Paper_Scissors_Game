let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg1");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");
const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
};
const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin){
        userscore++;
        user.innerText = userscore;
        msg.innerText = `Hurrah! You Win. Your ${userchoice} beats ${compchoice}.`;
        msg.style.backgroundColor = "blue";
    }
    else{
        compscore++;
        comp.innerText = compscore;
        msg.innerText = `Oh No! You Lose. ${compchoice} beats your ${userchoice}.`;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoice) => {
    //generate computer choice
    const compchoice = gencompchoice();
    if(userchoice === compchoice)
    {
        msg.innerText = "Game Draw! Play again.";
        msg.style.backgroundColor = "green";
    }
    else{
        let userwin = true;
        if(userchoice === "rock")
        {
            userwin = compchoice === "paper"?false:true;
        }
        else if(userchoice === "paper")
        {
            userwin = compchoice === "rock"?true:false;
        }
        else{
            userwin = compchoice === "rock"?false:true;
        }
    showwinner(userwin, userchoice, compchoice);
    }
};
choices.forEach((choice) => { 
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
