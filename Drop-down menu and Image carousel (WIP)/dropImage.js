//Drop-down menu
const mainList = document.getElementById("main-list");
const listItems = document.getElementsByClassName("list-items");
let openList = false;

function handleClick(){
    if(openList === false){
    for(let i = 0; i < listItems.length; i++){
        listItems[i].style.display = "block";
    };
    mainList.innerText = "Close"
    mainList.style.backgroundColor = "green"
    openList = true;
    
    } else if(openList === true){
        for(let i = 0; i < listItems.length; i++){
            listItems[i].style.display = "none";
        };
        mainList.innerText = "Open"
        mainList.style.backgroundColor = "white"
        openList = false;
    };
};

mainList.addEventListener("click", handleClick);

//Image carousel
const left = document.getElementById("button-left");
const right = document.getElementById("button-right");

function carousel(){
let index = 1;
document.getElementById("1").style.display = "block"

    function next(){
            index++;
            if(index > 4){
                index = 1;
                document.getElementById("1").style.display = "block"
                document.getElementById("bullet-1").innerText = "X"
                document.getElementById("4").style.display = "none"
                document.getElementById("bullet-4").innerText = "O"
            } else{
                document.getElementById(index).style.display = "block"
                document.getElementById(`bullet-${index}`).innerText = "X"
                document.getElementById(index - 1).style.display = "none"
                document.getElementById(`bullet-${index - 1}`).innerText = "O"
            };
    };

    setInterval(next, 5000);
    right.addEventListener("click", next);

    left.addEventListener("click",() => {
        index--;
        if(index < 1){
            index = 4;
            document.getElementById("4").style.display = "block"
            document.getElementById("bullet-4").innerText = "X"
            document.getElementById("1").style.display = "none"
            document.getElementById("bullet-1").innerText = "O"
        } else{
            document.getElementById(index).style.display = "block"
            document.getElementById(`bullet-${index}`).innerText = "X"
            document.getElementById(index + 1).style.display = "none"
            document.getElementById(`bullet-${index + 1}`).innerText = "O"
        };
    });

};
carousel()