/**
 * Created by sno1086 on 8/14/17.
 */

function run() {
 var count = 0;
 while (count < 5000000000){
     count++;
 }
 console.log("ended");
}

var val = 1;
function alertVal(){
    alert("Clicked" + val);
    val++;
}

function reset() {
    val = 1;
}




