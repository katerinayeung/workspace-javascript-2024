//Generate random integer
function randInt(min,max){
    return Math.floor(Math.random()*(max-min+1) +min);
}

//get the numbers
var M = randInt(300,600);
var N = randInt(700,800);
var K = randInt(800,900);

//update the questions -- total,giveout, takeback
document.querySelector('#total').textContent = M.toString();
document.querySelector('#giveback').textContent = N.toString();
document.querySelector('#takeback').textContent = K.toString();

//update the answers
//M-N+K , M-N-K, M-T, M-S
var T = N+K;
var S = N-K;

document.querySelector('[value="1"]').nextSibling.nodeValue= M.toString() + "-" + N.toString() + "+" + K.toString();
document.querySelector('[value="2"]').nextSibling.nodeValue= M.toString() + "-" + N.toString() + "-" + K.toString();
document.querySelector('[value="3"]').nextSibling.nodeValue= M.toString() + "-" + T.toString();
document.querySelector('[value="4"]').nextSibling.nodeValue= M.toString() + "-" + S.toString();


//pick the answer
function changeStyle(){
    var classname = this.getAttribute("class");
    alert("clicked class"+ classname);
    //alert("clicked class" +classname);
    if (classname == "answer"){
        this.setAttribute("class","answer selected");
    }else{
        this.setAttribute("class","answer");
        //the style goes back to answer

    }
    //testing on animation
    this.animate([{transform:'rotate(0deg)'},{transform:'rotate(randInt(0,360))'}],{duration:3000,fill:'forwards'});
}
//add eventlistener on the answer
var answerlist = document.getElementsByClassName('answer');
for(var i = 0; i <4; i++){
    answerlist[i].addEventListener('click', changeStyle, false);
}