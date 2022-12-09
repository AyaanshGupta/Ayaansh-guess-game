p1 = localStorage.getItem("p1_name");
p2 = localStorage.getItem("p2_name");
p1_s = 0;
p2_s = 0;
document.getElementById("player1_name").innerHTML = p1 + ":";
document.getElementById("player2_name").innerHTML = p2 + ":";

document.getElementById("player1_score").innerHTML = p1_s;
document.getElementById("player2_score").innerHTML = p2_s;

document.getElementById("player_question").innerHTML = "question turn :-" + p1;
document.getElementById("player_answer").innerHTML = "answer turn :-" + p2;


function send() {

w = document.getElementById("word").value;
word = w.toLowerCase();

c1 = word.charAt(1);
l = Math.floor(word.length / 2);
c2 = word.charAt(l);
m = word.length - 1;
c3 = word.charAt(m);

rc1 = word.replace(c1, "_");
rc2 = rc1.replace(c2, "_");
rc3 = rc2.replace(c3, "_"); 
q = "<h4 id ='word_display' >Q. " + rc3 + "</h4>";
i = "<br> Answer :- <input type = 'text' id = 'input_check_box'>";
ch = "<br> <br> <button class= 'btn btn-info' onclick = 'check()'> check </button>";
row = q + i + ch;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}

q_t = "player_1";
a_t = "player_2";
function check() {

g_a = document.getElementById ("input_check_box").value;
ans = g_a.toLowerCase();
if(ans == word) {

if(a_t== "player_1" )  {
p1_s = p1_s + 1;
document.getElementById ("player1_score").innerHTML = p1_s;

}  
else{
    p2_s = p2_s + 1;
    document.getElementById ("player2_score").innerHTML = p2_s;

}
}   
if(q_t == "player_1" ){

q_t = "player_2";
document.getElementById("player_question").innerHTML = "question turn:-" + p2;

}
else {
    q_t = "player_1";
    document.getElementById("player_question").innerHTML = "question turn:-" + p1;
       
}

if(a_t == "player_1" ){

    a_t = "player_2";
    document.getElementById("player_answer").innerHTML = "answer turn:-" + p2;
    
    }
    else {
        a_t = "player_1";
        document.getElementById("player_answer").innerHTML = "answer turn:-" + p1;
           
    }
document.getElementById("output").innerHTML = "";    
}