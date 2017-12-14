for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 10);
}
//outputs 10 -  10 times

//how to fix it to print 1-10

for(var i = 0; i < 10; i++) {
    setTimeout((function() {
        console.log(i);
    })(i), 10);
}