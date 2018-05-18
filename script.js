// Your JS goes here

document.body.setAttribute("style", "background: solid red");

(function() {
    
    //document.body.style.backgroundColor = "red";
    for (let i=0; i<8; i++) {
        console.log("affirmative");
        let checkerBoardSquare = document.createElement('div');
        document.body.appendChild(checkerBoardSquare);
        
        
        // console.log(checkerBoardSquare);
        checkerBoardSquare.style.width ="11.1%";
        checkerBoardSquare.style.float="left";
        checkerBoardSquare.style.paddingBottom="11.11%";
        checkerBoardSquare.style.backgroundColor='black';
    }

    
})();


