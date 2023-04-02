const SVG_NS = "http://www.w3.org/2000/svg";

const MAX_DEPTH = 10;
const BASE_SIZE = 100;

const svg = document.querySelector("#recursive-squares");
const sqGroup = document.querySelector("#sq-group");
const defs = document.querySelector("#sq-defs");

let getColor = function (depth) {
    let color;

   // let changeR = counter*1.7 ;
  //  let changeG= 255-(2.75*counter); 
   // let changeB = 150 + (counter*0.95) ;

   // color  = `rgb(${changeR}, ${changeG} , ${changeB})` ; 
  //  rainbow
    color = `hsl(${depth * 80}, 50%, ${50 + 50 * depth / MAX_DEPTH}%)`

    // black and white
  // color = (depth % 2 == 0) ? "black" : "white";

   //color = "white";
    
    return color;
}

let iterateSquare = function (depth, parent) {    
    let mini = document.createElementNS(SVG_NS, "use");
    mini.setAttributeNS(null, "href", "#sq-basic");
    mini.setAttributeNS(null, "fill", getColor(depth)) ;
    parent.appendChild(mini);

    if (depth < MAX_DEPTH) {
	let sqGroup = document.createElementNS(SVG_NS, "g");
	sqGroup.setAttributeNS(null, "transform", `matrix(0.5, -0.5 , 0.5, 0.5 , 0 , ${BASE_SIZE/2 })`);
   // sqGroup.innerHTML='<animateTransform attributeName="transform" type="scale" from= "1 1" to="0.5 0.5"  begin="0s" dur="6s" repeatCount="0"/>';
   // sqGroup.innerHTML='<animateTransform attributeName="transform" type="sclae" from= "0 0" to="0 50"  begin="0s" dur="6s" repeatCount="0"/>';
	sqGroup.innerHTML='<animateTransform attributeName="transform" type="scale" from= "1 1" to="1.25 1.25"  begin="0s" dur="6s" repeatCount="indefinte"/>';
    parent.appendChild(sqGroup);
	iterateSquare(depth+1, sqGroup);
    }

}

iterateSquare(0, sqGroup);

