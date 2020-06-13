//gather all three boxes
var boxes = document.querySelectorAll('.col-lg');


//function to change colors on all three boxes on mouseover
function changeAll() {
    for (i = 0; i < boxes.length; i++) {
         boxes[i].classList.add('blackbg');
    }
};
//function to change colors back all three boxes on mouseleave
function changeBack() {
    for (i = 0; i < boxes.length; i++) {   
        boxes[i].classList.remove('blackbg');
    }    
};

//for loop with event listeners looking for mouseovers
 for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseenter", changeAll);
    boxes[i].addEventListener("mouseleave", changeBack);
    }





 

//adding mew DOM Nodes variables
    var newH3 = document.createElement('h3');
    var newP = document.createElement('p');
    var newH4 = document.createElement('h4');

    var ooh = document.createTextNode('Oooh - so close, but no cigar');
    var finalText = newH3.appendChild(ooh);
    var placeHolder1 = document.getElementsByTagName('main')[0];

    var dingDing = document.createTextNode('DING DING Ding - We have a winner!');
    var finalText2 = newP.appendChild(dingDing);
    var placeHolder2 = document.querySelector('.jumbotron');

    var butterLuck = document.createTextNode('Oops, butter luck next time');
    var finalText3 = newH4.appendChild(butterLuck);
    var placeHolder3 = document.getElementsByTagName('div')[3];

//When you click on box 1
    boxes[0].addEventListener('click', 
        function() {
            placeHolder1.appendChild(newH3); 
            }
        );

//When you click on box 2
     boxes[1].addEventListener('click', 
        function() {
            placeHolder2.appendChild(finalText2); 
            }
       );

//When you click on box 3
    boxes[2].addEventListener('click', 
        function() {
            placeHolder3.appendChild(finalText3); 
            }
        );       




//Hidden button made to appear when clicking on any box
var hiddenButton = document.getElementsByTagName('button')[0];

function buttonAppear() {
    hiddenButton.classList.remove('hidden');
    hiddenButton.classList.add('shown');
    }
    
//for loop with event listeners looking for mouseovers
for (i = 0; i < boxes.length; i++) {
     boxes[i].addEventListener("click", buttonAppear);
     }

