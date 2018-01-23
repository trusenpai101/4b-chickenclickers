// JavaScript Document

// global variables
var eggs = 0;
var chicks = 0;
var cartons = 0;
var farms = 0;

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
			if(eggs >= 10) {
				eggs-=10;
				cartons++;
			break;
		case "farms":
			if(eggs >= 10) {
				eggs-=10;
				farms++;
			break;
		case "eggtopia":
			if(eggs >= 10) {
				eggs-=10;
				eggtopia++;
			break;
		case "universee":
			if(eggs >= 10) {
				eggs-=10;
				universee++;
			break;
	}
}


function chicken_clicker() {
	eggs++;
	document.getElementById("eggs").value = eggs;
}


function buy_chick() {
	chicks++;
	document.getElementById("chicks").value = chicks;
}


function buy_carton() {
	cartons++;
	document.getElementById("cartons").value = cartons;
}


function buy_farms() {
	farms++;
	document.getElementById("farms").value = farms;
}

var eggtopia = 0;

function buy_eggtopia() {
	eggtopia++;
	document.getElementById("eggtopia").value = eggtopia;
}
	
var universee = 0;

function buy_universe() {
	universee++;
	document.getElementById("universee").value = universee;
}
