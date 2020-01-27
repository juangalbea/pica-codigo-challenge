
function myFunction() {

    var h = document.getElementById("high").value;
    var l = document.getElementById("length").value;
    var w = document.getElementById("width").value;
    var s = document.getElementById("side").value;

    if (l == 0 || h == 0 || w == 0 || s == 0) {

        document.getElementById("one").innerHTML = "All the values must be bigger than 0";

    } else if (l < s || h < s || w < s) {

        document.getElementById("one").innerHTML = "";
        document.getElementById("two").innerHTML = "0 cubes";

    } else {
        
        document.getElementById("one").innerHTML = "";
        text();

    }

    function text() {

        document.getElementById("two").innerHTML = `${numberOfCubes()} cubes can fit inside the box`;

    }

    function numberOfCubes() {

        var nLength = Math.floor(l / s);
        var nHigh = Math.floor(h / s);
        var nWidth = Math.floor(w / s);
        var totalCubes = nLength * nHigh * nWidth;
        return totalCubes;

    }
}

