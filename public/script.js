const canvas = document.getElementById("canvasContent");
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

const drawStuff = () =>{
    ctx.fillRect(0,300,30,100)
    ctx.fillStyle = '#ff1493';

    ctx.fillRect(25,300, 30,100)
    ctx.fillStyle = '#ff0000';



};










let player_x = 250;
let player_y = 110;
let width = 30;
let height = 30;


const loop  = () =>{
    ctx.clearRect(0,0,600,400);
    drawStuff();
    ctx.fillStyle = '#ff1493';
    ctx.fillRect(player_x,player_y,width,height);
    player_x++;
};

setInterval(loop, 10);




