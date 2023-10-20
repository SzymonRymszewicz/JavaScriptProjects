let canv = document.getElementById("canv");
let consol = document.getElementById("console");

const canv_width = canv.width;
const canv_height = canv.height;

const ctx = canv.getContext("2d");
ctx.font = "30px Arial";

let turn = 0;

let Players = [];
let Pokemons = [];