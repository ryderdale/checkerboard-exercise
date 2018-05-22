// Your JS goes here

//Part 1: Red & Black Checkered Board
//user must specify color in quotes, e.g. 'blue','red'


function makeCheckerBoard(color1,color2) {
    
   function makeCheckerBoardRow (rowNumber) {
       for (let i=0; i<9; i++) {
        let checkerSquare = document.createElement('div');    
        document.body.appendChild(checkerSquare);
        checkerSquare.style.width='11.1%';
        checkerSquare.style.paddingBottom='11.1%';
        checkerSquare.style.float='left';
        if ((i+rowNumber)%2 === 0) {
            checkerSquare.style.backgroundColor=color1;
        }
        else {
            checkerSquare.style.backgroundColor=color2;
        }
       }
   };

   for (let i=0; i<9; i++) {
    makeCheckerBoardRow(i);
   };
    
};
//uncomment immediately below to invoke function 
//makeCheckerBoard('red','black');

//Part 2: Random Color Checkered Board

//funtion to gernerate a rgb color code
function generatedRandomColor () {
    let numberOne = Math.floor(Math.random() * 255)
    let numberTwo = Math.floor(Math.random() * 255)
    let numberThree = Math.floor(Math.random() * 255)
    let numberFour = .3;
    return (`rgb(${numberOne},${numberTwo},${numberThree},${numberFour})`);
};

//generate a checkerboard made of two random colors
//uncomment immediately below to invoke function 
//makeCheckerBoard(generatedRandomColor(),generatedRandomColor());

//generate a board of random colored squares
function makeRandomBoardOfColoredSquares() {
    
    function makeCheckerBoardRow () {
        for (let i=0; i<9; i++) {
            let checkerSquare = document.createElement('div');    
            document.body.appendChild(checkerSquare);
            checkerSquare.style.width='11.1%';
            checkerSquare.style.paddingBottom='11.1%';
            checkerSquare.style.float='left';
            checkerSquare.style.backgroundColor=generatedRandomColor();
        }
    };
 
    for (let i=0; i<9; i++) {
     makeCheckerBoardRow(i);
    };

};
 
//uncomment immediately below to invoke funtion 
//makeRandomBoardOfColoredSquares();


//generate a checkerboard and make it gradient from top to bottom

function generateGradientCheckerBoard() {
    
   
    let color1 = generatedRandomColor();
    let color2 = generatedRandomColor();
    console.log(color1);
    console.log(color2);
    makeCheckerBoard(color1, color2);
    let backgroundContainer = document.getElementsByTagName("body")[0];
    backgroundContainer.setAttribute("style", "background: linear-gradient(#e66465, #9198e5); z-index: 2;");
    document.body.appendChild(backgroundContainer); 
    
    
    
    // gradientLayer.setAttribute("style", "background: linear-gradient(red,blue);z-index:1;");
};

generateGradientCheckerBoard();



//note: to create a radient effect on each square could use css's repeating-linear-gradient:. 


//generate a checkerboard and make the squares flash a different color

function generateFlashingCheckerBoard () {
    makeRandomBoardOfColoredSquares();
    setInterval( function replaceAllCheckers () {
        function replaceCheckersRow () {
            for (let i=0; i<81; i++) {
                let checkerSquare = document.createElement('div');
                let checkerSquareBeingReplaced = document.getElementsByTagName('body')[0];
                checkerSquareBeingReplaced.replaceChild(checkerSquare, checkerSquareBeingReplaced.childNodes[i]);
                checkerSquare.style.width='11.1%';
                checkerSquare.style.paddingBottom='11.1%';
                checkerSquare.style.float='left';
                checkerSquare.style.backgroundColor=generatedRandomColor();
            }
        };
        replaceCheckersRow();
        for (i=81; i<85; i++) {
            let removeExcess = document.getElementsByTagName('div')[i];
            removeExcess.parentNode.removeChild(removeExcess);
        }
    }, 2000);
    
}

//uncomment below to invoke function 
//generateFlashingCheckerBoard()
