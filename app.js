turn = "X"

function firstMove(){
    if(turn=="X"){
        document.getElementById("first").value="X";
        document.getElementById("first").disabled = true;
        turn="O"
    }
    else{
        document.getElementById("first").value="O";
        document.getElementById("first").disabled = true;
        turn = "X"

    }
}
function secondMove(){
    if(turn=="X"){
        document.getElementById("second").value = "X";
        document.getElementById("second").disabled=true;
        turn="O"
    }
    else{
        document.getElementById("second").value="O";
        document.getElementById("second").disabled = true;
        turn = "X"
}
}
function thirdMove(){
    if(turn=="X"){
        document.getElementById("third").value = "X";
        document.getElementById("third").disabled=true;
        turn="O"
    }
    else{
        document.getElementById("third").value="O";
        document.getElementById("third").disabled = true;
        turn = "X"

}
}
function fourthMove(){
    if(turn=="X"){
        document.getElementById("fourth").value = "X";
        document.getElementById("fourth").disabled=true;
        turn="O"
    }
    else{
        document.getElementById("fourth").value="O";
        document.getElementById("fourth").disabled = true;
        turn = "X"

}

}
function fifthMove(){
    if(turn=="X"){
        document.getElementById("fifth").value = "X";
        document.getElementById("fifth").disabled=true;
        turn="O"
    }
    else{
        document.getElementById("fifth").value="O";
        document.getElementById("fifth").disabled = true;
        turn = "X"

}
}
function sixthMove(){
    if(turn=="X"){
        document.getElementById("sixth").value = "X";
        document.getElementById("sixth").disabled=true;
        turn="O"
    }
    else{
        document.getElementById("sixth").value="O";
        document.getElementById("sixth").disabled = true;
        turn = "X"

}
}

function seventhMove(){
    if(turn=="X"){
        document.getElementById("seventh").value = "X";
        document.getElementById("seventh").disabled=true;
        turn="O"
    }
    else{
        document.getElementById("seventh").value="O";
        document.getElementById("seventh").disabled = true;
        turn = "X"

}
}
function eigthMove(){
    if(turn=="X"){
        document.getElementById("eight").value = "X";
        document.getElementById("eight").disabled=true;
        turn="O"
    }
    else{
        document.getElementById("eight").value="O";
        document.getElementById("eight").disabled = true;
        turn = "X"

}
}
function ninthMove(){
    if(turn=="X"){
        document.getElementById("ninth").value = "X";
        document.getElementById("ninth").disabled=true;
        turn="O"
    }
    else{
        document.getElementById("ninth").value="O";
        document.getElementById("ninth").disabled = true;
        turn = "X"

}
}
// FUNCTION FOR CHECKING RESULT
function resulting(){
    var one = document.getElementById("first").value;
    var two = document.getElementById("second").value;
    var three = document.getElementById("third").value;
    var four = document.getElementById("fourth").value;
    var five = document.getElementById("fifth").value;
    var six = document.getElementById("sixth").value;
    var seven = document.getElementById("seventh").value;
    var ath = document.getElementById("eight").value;
    var nine = document.getElementById("ninth").value;
    if((one=="X") && (two =="X") && (three=="X")){
        document.getElementById("res").innerHTML="PLAYER X WINS!"
        document.getElementById("fourth").disabled=true;
        document.getElementById("fifth").disabled = true;
        document.getElementById("sixth").disabled=true;
        document.getElementById("seventh").disabled=true;
        document.getElementById("eight").disabled=true;
        document.getElementById("ninth").disabled=true;
    }
    else if((one=="X") && (five=="X") && (nine=="X")){
        document.getElementById("res").innerHTML="PLAYER X WINS!"
        document.getElementById("second").disabled=true
        document.getElementById("third").disabled=true
        document.getElementById("fourth").disabled=true
        document.getElementById("sixth").disabled=true
        document.getElementById("seventh").disabled=true
        document.getElementById("eight").disabled=true
    }
    else if((four=="X") && (five=="X") && (six=="X")){
        document.getElementById("res").innerHTML="PLAYER X WINS!"
        document.getElementById("first").disabled=true
        document.getElementById("second").disabled=true
        document.getElementById("third").disabled=true
        document.getElementById("seventh").disabled=true
        document.getElementById("eight").disabled=true
        document.getElementById("ninth").disabled=true
    }
    else if((seven=="X") && (ath=="X") && (nine=="X")){
        document.getElementById("res").innerHTML="PLAYER X WINS!"
        document.getElementById("first").disabled=true
        document.getElementById("second").disabled=true
        document.getElementById("third").disabled=true
        document.getElementById("fourth").disabled=true
        document.getElementById("fifth").disabled=true
        document.getElementById("sixth").disabled=true
    }
    else if((one=="X") && (four=="X") && (seven=="X")){
        document.getElementById("res").innerHTML = "PLAYER X WINS!"
        document.getElementById("second").disabled=true
        document.getElementById("third").disabled=true
        document.getElementById("fifth").disabled=true
        document.getElementById("sixth").disabled=true
        document.getElementById("eight").disabled=true
        document.getElementById("ninth").disabled=true
    }
    else if((two=="X") && (five=="X") && (ath=="X")){
        document.getElementById("res").innerHTML="PLAYER X WINS!"
        document.getElementById("first").disabled=true
        document.getElementById("third").disabled=true
        document.getElementById("fourth").disabled=true
        document.getElementById("sixth").disabled=true
        document.getElementById("seventh").disabled=true
        document.getElementById("ninth").disabled=true
    }
    else if((three=="X") && (six=="X") && (nine=="X")){
        document.getElementById("res").innerHTML = "PLAYER X WINS!"
        document.getElementById("first").disabled=true
        document.getElementById("second").disabled=true
        document.getElementById("fourth").disabled=true
        document.getElementById("fifth").disabled=true
        document.getElementById("seventh").disabled=true
        document.getElementById("eight").disabled=true
    }
    else if((three=="X") && (five=="X") && (seven=="X")){
        document.getElementById("res").innerHTML="PLAYER X WINS!"
        document.getElementById("first").disabled=true
        document.getElementById("second").disabled=true
        document.getElementById("fourth").disabled=true
        document.getElementById("sixth").disabled=true
        document.getElementById("eight").disabled=true
        document.getElementById("ninth").disabled=true
    }
    // ---------------------------------------------------------------------------------
    if((one=="O") && (two =="O") && (three=="O")){
        document.getElementById("res").innerHTML="PLAYER O WINS!"
        document.getElementById("fourth").disabled=true;
        document.getElementById("fifth").disabled = true;
        document.getElementById("sixth").disabled=true;
        document.getElementById("seventh").disabled=true;
        document.getElementById("eight").disabled=true;
        document.getElementById("ninth").disabled=true;
    }
    else if((one=="O") && (five=="O") && (nine=="O")){
        document.getElementById("res").innerHTML="PLAYER O WINS!"
        document.getElementById("second").disabled=true
        document.getElementById("third").disabled=true
        document.getElementById("fourth").disabled=true
        document.getElementById("sixth").disabled=true
        document.getElementById("seventh").disabled=true
        document.getElementById("eight").disabled=true
    }
    else if((four=="O") && (five=="O") && (six=="O")){
        document.getElementById("res").innerHTML="PLAYER O WINS!"
        document.getElementById("first").disabled=true
        document.getElementById("second").disabled=true
        document.getElementById("third").disabled=true
        document.getElementById("seventh").disabled=true
        document.getElementById("eight").disabled=true
        document.getElementById("ninth").disabled=true
    }
    else if((seven=="O") && (ath=="O") && (nine=="O")){
        document.getElementById("res").innerHTML="PLAYER O WINS!"
        document.getElementById("first").disabled=true
        document.getElementById("second").disabled=true
        document.getElementById("third").disabled=true
        document.getElementById("fourth").disabled=true
        document.getElementById("fifth").disabled=true
        document.getElementById("sixth").disabled=true
    }
    else if((one=="O") && (four=="O") && (seven=="O")){
        document.getElementById("res").innerHTML = "PLAYER O WINS!"
        document.getElementById("second").disabled=true
        document.getElementById("third").disabled=true
        document.getElementById("fifth").disabled=true
        document.getElementById("sixth").disabled=true
        document.getElementById("eight").disabled=true
        document.getElementById("ninth").disabled=true
    }
    else if((two=="O") && (five=="O") && (ath=="O")){
        document.getElementById("res").innerHTML="PLAYER O WINS!"
        document.getElementById("first").disabled=true
        document.getElementById("third").disabled=true
        document.getElementById("fourth").disabled=true
        document.getElementById("sixth").disabled=true
        document.getElementById("seventh").disabled=true
        document.getElementById("ninth").disabled=true
    }
    else if((three=="O") && (six=="O") && (nine=="O")){
        document.getElementById("res").innerHTML = "PLAYER O WINS!"
        document.getElementById("first").disabled=true
        document.getElementById("second").disabled=true
        document.getElementById("fourth").disabled=true
        document.getElementById("fifth").disabled=true
        document.getElementById("seventh").disabled=true
        document.getElementById("eight").disabled=true
    }
    else if((three=="O") && (five=="O") && (seven=="O")){
        document.getElementById("res").innerHTML="PLAYER O WINS!"
        document.getElementById("first").disabled=true
        document.getElementById("second").disabled=true
        document.getElementById("fourth").disabled=true
        document.getElementById("sixth").disabled=true
        document.getElementById("eight").disabled=true
        document.getElementById("ninth").disabled=true
    }
    else if((one=="X" || one=="O")&& (two=="X" || two=="O") && (three=="X" || three=="O") && (four=="X" || four=="O") && (five=="X" || five=="O") && (six=="X" || six=="O") && (seven=="X" || seven=="O") && (ath=="X" || eight=="O") && (nine=="X" || nine=="O")){
        document.getElementById("res").innerHTML="Match Drawn!"

    }



}