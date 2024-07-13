
const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newGameBtn=document.querySelector(".btn");


let currentPlayer;
let gameGrid;
// then the firstly they are been empty them

const winningPosition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

    function swapTurn()
    {
        if(currentPlayer=="X")
        {
                    currentPlayer="0";
        }
        else
        {
            currentPlayer="X";
        }
        //then the ui update them
        gameInfo.innerText=`Current Player - ${currentPlayer}`;
    }
function checkGameOver()
{
//    newGameBtn.classList.add("active");
    let answer="";
    winningPosition.forEach((position)=>
    {
        //then the three index them 678      3333

        //thnn the seem each box 3 are been fit or not
        //means the nonempty and the exactly the same in the value  
        if((gameGrid[position[0]]!=""||gameGrid[position[1]]!=""||gameGrid[position[2]]!="")&&
            (gameGrid[position[0]]===gameGrid[position[1]])&&(gameGrid[position[1]]==gameGrid[position[2]]))
            {
                //check the winner is if the x

                if(gameGrid[position[0]]=="X")
                    answer="X";
                else
                answer="0";
                //then the disable the pointer event
                boxes.forEach((box)=>
                {
                    box.style.pointerEvents="none";
                })
                //then the now known x/0 is the winner
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
                //then the we have the winner
                if(answer!="")
                {
                    gameInfo.innerText=`Winner Player-${answer}`;
                    newGameBtn.classList.add("active");
                    return;

                }
//then the lets check the whetehr its been tie
if(answer!=="")
{
    gameInfo.innerText=`Winner Player-${answer}`;
    newGameBtn.classList.add("active");
    return;
}
//then the lets check wheter its been tie
    let fillcount=0;
    gameGrid.forEach((box)=>
    {
        if(box!=="")
        {
            fillcount++;
        }
    });
//then the board is fill game is been tie
    if(fillcount==9)
    {
        gameInfo.innerText="Game Tied !";
        newGameBtn.classList.add("active");
    }
            }
   
     });
}
function handleClick(index)
{   
    //then the empty them only in them
    if(gameGrid[index]=="")
    {
        //then the html change
        boxes[index].innerText=currentPlayer;
        boxes[index].style.pointerEvents="none";
        //then the array uppside change
        gameGrid[index]=currentPlayer;
        //then the swap them t
        swapTurn();
        //check the koi jeet gaye y nahi
        checkGameOver();

    }
}


// then the intialize the game
function initGame()
{
    currentPlayer="X";
    gameGrid=["","","","","","","","",""];
    //mmm
    //then the make the ui empty     
    boxes.forEach((box,index) => {
        box.innerText="";
        boxes[index].style.pointerEvents="all";
        //intislize the box with css property
        box.classList=`box box${index+1}`;
    });
     
    newGameBtn.classList.remove("active");
    // then the make them invisible
    gameInfo.innerText=`Current Player -${currentPlayer}`;
}
initGame(); 

//<!-- then the index for the each box -->
 
   boxes.forEach((box,index)=>
    {
        box.addEventListener("click",function()
        {
            handleClick(index);
        })
    })


