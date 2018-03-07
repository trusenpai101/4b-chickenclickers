// JavaScript Document

//var name = prompt("Hi there! What do you want to name you egg company?");
	//var valid=confirm("is " +name+ " correct?")
	//document.write(" "+name+" ");
	
	
// global variables
var eggs = 0;
var chicks = 0;
var cartons = 0;
var trucks = 0;
var farms = 0;
var eggtopia = 0;
var universee = 0;

window.onload = function() {
	// load cookies
	load_cookies();
	update_values();
};

function chicken_clicker() {
	eggs++;
	update_values();
}

// buy("chicks");
function buy(sel) {
	switch(sel) {
		case "chicks":
			if(eggs >= 10) {
				eggs-=10;
				chicks++;
			}
			break;
		case "cartons":
			if(eggs >= 100) {
				eggs-=100;
				cartons++;
			}
		break;
		case "trucks":
			if(eggs >= 500) {
				eggs-=500;
				trucks++;
	}
			break;
		case "farms":
			if(eggs >= 1000) {
				eggs-=1000;
				farms++;
			}
			break;
		case "eggtopia":
			if(eggs >= 100000) {
				eggs-=100000;
				eggtopia++;
			}
			break;
		case "universee":
			if(eggs >= 1) {
				eggs-=1;
				universee++;
				break;
			}
			}
	update_values();
}

function update_values() {
	document.getElementById("eggs").value= Math.floor(eggs);
	document.getElementById("chicks").value= chicks;
	document.getElementById("cartons").value= cartons;
	document.getElementById("trucks").value= trucks;
	document.getElementById("farms").value= farms;
	document.getElementById("eggtopia").value= eggtopia;
	document.getElementById("universee").value= universee;
	
}

setInterval(bonus, 100);
function bonus() {
	eggs+=chicks*0.05;
	eggs+=cartons*0.1;
	eggs+=trucks*0.15;
	eggs+=farms*0.25;
	eggs+=eggtopia*0.4;
	eggs+=universee*5;
	update_values();
	save_game();
}



function clear(){
	eggs = 0;
	chicks= 0;
	cartons = 0;
	trucks = 0;
	farms = 0;
	eggtopia = 0;
	universee = 0;
}

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

// COOKIES
function save_game() {
	var exdays = 365;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "eggs=" + eggs + ";" + expires;
    document.cookie = "chicks=" + chicks + ";" + expires;
    document.cookie = "trucks=" + trucks + ";" + expires;
    document.cookie = "farms=" + farms + ";" + expires;
    document.cookie = "cartons=" + cartons + ";" + expires;
    document.cookie = "eggtopia=" + eggtopia + ";" + expires;
    document.cookie = "universee=" + universee + ";" + expires;

}

function get_cookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function load_cookies() {
    eggs = Number(get_cookie("eggs"));
    chicks = Number(get_cookie("chicks"));
    cartons = Number(get_cookie("cartons"));
    trucks = Number(get_cookie("trucks"));
    farms = Number(get_cookie("farms"));
    eggtopia = Number(get_cookie("eggtopia"));
    universee = Number(get_cookie("universee"));
}

//clear button
function clear() {
    document.getElementById("clear").reset();
}
