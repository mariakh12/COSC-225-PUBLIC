function drawCA(rule, width, height){ 
    const head= document.querySelector("#main") ;
    const title = document.createElement("h1")  ;
    title.textContent="RULE " + rule ;
    head.appendChild(title) ;

    let config = new Array(width).fill(0) ;  //initial config 

    // Initializing config array with 0 and 1's
    for(let i=0; i<width; i++)
    {
        if(i % 4 == 0)
        {
            config[i]=0 ;
        }
        else{
            config[i]=1 ;
        }
    }

    head.appendChild(getRow(config)) ;

    for(let i = 1; i<height; i++)
    {
        config = applyRule(config,rule) ;
        head.appendChild(getRow(config)) ;

    } 
}

function applyRule(config, rule){
    let ruleArr= getRuleArr(rule) ;
    let temp = new Array(config.length).fill(0) ; 

    for(let i=0; i < config.length ; i++)
    {
        let sum = 0 ;
        if(i==0)
        {
            sum = 4*config[config.length-1] + 2*config[i] + config[i+1] ;
        }
        else if(i==(config.length-1))
        {
            sum = 4*config[i-1] + 2*config[i] + config[0] ;
        }
        else
        {
            sum = 4*config[i-1] + 2*config[i] + config[i+1] ; 
        }
        temp[i]= (ruleArr[sum]) ;
    }
    
    return temp ;
}

function getRow(config){
    const r = document.createElement("div") ;
    r.classList.add("row") ;

    for(let i=0 ; i<config.length ; i++)
    {
        let cell = document.createElement("div");
        cell.classList.add("cell");

        if(config[i]==1){
            cell.classList.add("one");
        }
        else{
            cell.classList.add("zero");
        }
        r.appendChild(cell) ;
    }

    return r ; 
}

function getRuleArr(rule){
    ruleArr=[];
    for(let i=0; i < 8; i++)
    {
        ruleArr.push(rule%2);
        rule = Math.floor(rule/2);
    }
    return ruleArr ;
}

module.exports = { applyRule };