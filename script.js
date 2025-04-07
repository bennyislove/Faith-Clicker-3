var button = document.getElementById("click");
var count = 0;
var scoreperclick = 1;
var countdisplay = document.getElementById("score");
var johncount = 0;
var john = document.getElementById("john");
var johnprice = 100;
var johnamount = document.getElementById("johncount");
var johncost = document.getElementById("johnprice");
var garciacount = 0;
var garcia = document.getElementById("garcia");
var garciaprice = 10000;
var garciaamount = document.getElementById("garciacount");
var garciacost = document.getElementById("garciaprice");
var michaelcount = 0;
var michael = document.getElementById("michael");
var michaelprice = 500000;
var michaelamount = document.getElementById("michaelcount");
var michaelcost = document.getElementById("michaelprice");
var lisacount = 0;
var lisa = document.getElementById("lisa");
var lisaprice = 100000000;
var lisaamount = document.getElementById("lisacount");
var lisacost = document.getElementById("lisaprice");
var garycount = 0;
var gary = document.getElementById("gary");
var garyprice = 999999999;
var garyamount = document.getElementById("garycount");
var garycost = document.getElementById("garyprice");

button.addEventListener("click", function() {
    count += scoreperclick;
    countdisplay.innerHTML = "FAITH: " + count.toLocaleString();
});

john.addEventListener("click", function() {
    if (count >= johnprice) {
        count -= johnprice;
        johncount += 1;
        johnamount.innerHTML = johncount.toLocaleString();
        countdisplay.innerHTML = "FAITH: " + count.toLocaleString();
        scoreperclick += 5 * johncount;
        if (johnprice <= 999999999 - 100) {
            johnprice += 100;
        }
        johncost.innerHTML = johnprice.toLocaleString();
    }
})

garcia.addEventListener("click", function() {
    if (count >= garciaprice) {
        count -= garciaprice;
        garciacount += 1;
        garciaamount.innerHTML = garciacount.toLocaleString();
        countdisplay.innerHTML = "FAITH: " + count.toLocaleString();
        scoreperclick += 100 * garciacount;
        if (garciaprice <= 999999999 - 1000) {
            garciaprice += 1000;
        }
        garciacost.innerHTML = garciaprice.toLocaleString();
    }
})

michael.addEventListener("click", function() {
    if (count >= michaelprice) {
        count -= michaelprice;
        michaelcount += 1;
        michaelamount.innerHTML = michaelcount.toLocaleString();
        countdisplay.innerHTML = "FAITH: " + count.toLocaleString();
        scoreperclick += 1000 * michaelcount;
        if (michaelprice <= 999999999 - 10000) {
            michaelprice += 10000;
        }
        michaelcost.innerHTML = michaelprice.toLocaleString();
    }
})

lisa.addEventListener("click", function() {
    if (count >= lisaprice) {
        count -= lisaprice;
        lisacount += 1;
        lisaamount.innerHTML = lisacount.toLocaleString();
        countdisplay.innerHTML = "FAITH: " + count.toLocaleString();
        scoreperclick += 50000 * lisacount;
        if (lisaprice <= 999999999 - 100000) {
            lisaprice += 100000;
        }
        lisacost.innerHTML = lisaprice.toLocaleString();
    }
})

gary.addEventListener("click", function() {
    if (count >= garyprice) {
        count -= garyprice;
        garycount += 1;
        garyamount.innerHTML = garycount.toLocaleString();
        countdisplay.innerHTML = "FAITH: " + count.toLocaleString();
        scoreperclick += 1000000 * garycount;
        garycost.innerHTML = garyprice.toLocaleString();
    }
})