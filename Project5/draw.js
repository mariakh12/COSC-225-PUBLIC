const ns = "http://www.w3.org/2000/svg" ;
let click  = false ;
const box = document.querySelector("#box") ;
let rect = box.getBoundingClientRect() ;

box.addEventListener("click", beginLine) ;  // Activates beginLine once first click is detected


function beginLine(e)
{ 
    if(click == false)
    {
        click = true ; // set to true once a click is detected 
    }
    else
    {
        click = false ; 
    }

    let line = document.createElementNS(ns, "line") ;  
    x1 = e.clientX - rect.left ;
    y1 = e.clientY - rect.top  ;
    line.setAttributeNS(null, "x1", x1)  ;
	line.setAttributeNS(null, "y1", y1)  ; 

    // Traces movement of mouse 
    box.onmousemove = function Trace(e)
    {
        // Once first click is detected start forming line
        if(click == true)
        {
            let x2= e.clientX - rect.left ; 
            let y2= e.clientY - rect.top  ;
            line.setAttributeNS(null, "x2", x2) ;
            line.setAttributeNS(null, "y2", y2) ;

        }
    } 

    line.classList.add("line") ;
    box.appendChild(line) ;
    
    // Used once second click is detected as boolean is set to false once again
    if(click == false)
    {
        let x2= e.clientX - rect.left ; 
        let y2= e.clientY - rect.top  ;
        line.setAttributeNS(null, "x2", x2)  ;
	    line.setAttributeNS(null, "y2", y2)  ;    
    }           
    
}


