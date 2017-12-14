//  http://latentflip.com/loupe

setTimeout(function timeout() {
    console.log('Hi')
},8000);


/*------------ With Synchronous blocks browsers rendering----- */

function process(num){
    delay();
    console.log(num);
}

[1,2,3,4,5].forEach(function (i) {
    process(i)
});


/*--- Lets make it Asynchronous --*/

[1,2,3,4,5].forEach(function (i) {
    setTimeout(function () {
        process(i)
    },0)
});

