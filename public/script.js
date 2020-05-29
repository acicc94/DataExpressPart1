const canvas = document.getElementById("canvasContent");
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

const drawStuff = () =>{
    ctx.fillRect(0,300,25,100)
    ctx.fillStyle = '#ff1493';

    ctx.fillRect(35,300, 25,100);
    ctx.fillStyle = '#ff0000';
    ctx.fillText("secondBox",45,300);
    ctx.strokeText("secondBox", 45, 300);

    ctx.fillRect(65,300, 25,100);
    ctx.fillStyle = '#ff1493';
    
    ctx.fillRect(95,300, 25,100);
    ctx.fillStyle = '#ff1493';
    ctx.fillRect(115,300, 25,100);
    ctx.fillStyle = '#ff1493';
    ctx.fillRect(125,300, 25,100);
    ctx.fillStyle = '#ff1493';
    ctx.fillRect(135,300, 25,100);
    ctx.fillStyle = '#ff1493';
    ctx.fillRect(165,300, 25,100);
    ctx.fillStyle = '#ff1493';
    ctx.fillRect(195,300, 25,100);
    ctx.fillStyle = '#ff1493';
    ctx.fillRect(225,300, 25,100);
    ctx.fillStyle = '#ff1493';
    ctx.fillRect(255,300, 25,100);
    ctx.fillStyle = '#ff1493';
    ctx.fillRect(285,300, 25,100);
    ctx.fillStyle = '#ff1493';
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




