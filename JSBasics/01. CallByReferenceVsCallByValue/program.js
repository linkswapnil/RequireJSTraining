function fun(a, b, c) {
    a = 3;
    b.push("foo");
    c.first = false;
}

var x = 4;
var y = ["eeny", "miny", "mo"];
var z = {first: true};
fun(x,y,z);
console.log(x, y, z.first);

