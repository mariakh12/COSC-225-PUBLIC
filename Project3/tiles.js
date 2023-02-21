
function drawGrid()
{   
    let counter = 1 ;
    const grid = document.querySelector(".grid") ;
    for(let i = 1; i<= 10; i++)
    {
        for(let j=1 ; j<=10 ; j++)
        {  
            let changeR = counter*1.7 ;
            let changeG= 255-(2.75*counter); 
            let changeB = 150 + (counter*0.95) ;
            let elt = document.createElement("div") ;
            elt.style.backgroundColor = "rgb("+ changeR +" , "+ changeG +",  "+ changeB +")";
            elt.style.width = "50px" ;
            elt.style.height= "50px" ;
            counter = counter +1 ; 
            grid.appendChild(elt) ;
             
        }
    }
}


