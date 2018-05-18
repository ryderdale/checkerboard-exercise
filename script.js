// Your JS goes here

document.body.setAttribute("style", "background: solid red");

(function() {
    
    //document.body.style.backgroundColor = "red";
 
    function makeCheckerBoardRow(rowNumber) {
        for (let i=0; i<9; i++) {
            console.log("affirmative");
            let checkerBoardSquare = document.createElement('div');
            document.body.appendChild(checkerBoardSquare);
            checkerBoardSquare.style.width ="11.1%";
            checkerBoardSquare.style.float="left";
            checkerBoardSquare.style.paddingBottom="11.11%";
            if ((i+rowNumber)%2 === 0){
                checkerBoardSquare.style.backgroundColor='black';
            }
            else {
                checkerBoardSquare.style.backgroundColor='red';
            };

        }   
    };
    for (let i=0; i<9; i++) {
        makeCheckerBoardRow(i);
    };
    
})();


