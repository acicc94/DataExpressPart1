
const canvas = document.getElementById("canvasContent");
const ctx = canvas.getContext("2d");


canvas.width = 600;
canvas.height = 400;

const api_data = (my_data) => {
  heightAVG = 400 / 12;
  console.log(my_data);
  // color data
  redHeight = 400 - heightAVG * `${my_data.Question1[0]}`;
  console.log(redHeight);
  blueHeight = 400 - heightAVG * `${my_data.Question1[1]}`;
  greenHeight = 400 - heightAVG * `${my_data.Question1[2]}`;
  yellowHeight = 400 - heightAVG * `${my_data.Question1[3]}`;

  //food data
  pizzaHeight = 400 - heightAVG * `${my_data.Question2[0]}`;
  cheesBurgerHeight = 400 - heightAVG * `${my_data.Question2[1]}`;
  iceCreamHeight = 400 - heightAVG * `${my_data.Question2[2]}`;
  SteakHeight = 400 - heightAVG * `${my_data.Question2[3]}`;

  //music data
  classicHeight = 400 - (heightAVG * `${my_data.Question3[0]}`);
  rockHeight = 400 - (heightAVG * `${my_data.Question3[1]}`);
  rapHeight = 400 - (heightAVG * `${my_data.Question3[2]}`);
  edmHeight = 400 - (heightAVG * `${my_data.Question3[3]}`);

  colorBars = () => {
    //Red bar
    ctx.fillStyle = "#EE0300";
    ctx.fillRect(0, redHeight, 25, 500);
    ctx.fillText("Red", 0, 400);
    ctx.strokeText("Red", 0, 400);

    //blue bar
    ctx.fillStyle = "#220BD6";
    ctx.fillRect(55, blueHeight, 25, 500);
    ctx.fillText("Blue", 55, 400);
    ctx.strokeText("Blue", 55, 400);

    //green bar
    ctx.fillStyle = "#00D624";
    ctx.fillRect(105, greenHeight, 25, 500);
    ctx.fillText("Green", 105, 400);
    ctx.strokeText("Green", 105, 400);

    //yellow bar
    ctx.fillStyle = "#FFE400";
    ctx.fillRect(155, yellowHeight, 25, 500);
    ctx.fillText("Yellow", 155, 400);
    ctx.strokeText("Yellow", 155, 400);
  };

  foodBars = () => {
    //pizza
    ctx.fillStyle = "#D4AC42";
    ctx.fillRect(205, pizzaHeight, 25, 500);
    ctx.fillText("Pizza", 205, 400);
    ctx.strokeText("Pizza", 205, 400);
    //cheese burger
    ctx.fillStyle = "#AD0BD6";
    ctx.fillRect(255, cheesBurgerHeight, 25, 500);
    ctx.fillText("Burger", 255, 400);
    ctx.strokeText("Burger", 255, 400);
    //icecream
    ctx.fillStyle = "#5DFFB7";
    ctx.fillRect(305, iceCreamHeight, 25, 500);
    ctx.fillText("IceCream", 305, 400);
    ctx.strokeText("IceCream", 305, 400);
    //steak
    ctx.fillStyle = "#F07013";
    ctx.fillRect(355, SteakHeight, 25, 500);
    ctx.fillText("Steak", 355, 400);
    ctx.strokeText("Steak", 355, 400);
  };

  musicBars = () => {
    //classical
    ctx.fillStyle = "#ff1493";
    ctx.fillRect(405, classicHeight, 25, 500);
    ctx.fillText("Classical", 405, 400);
    ctx.strokeText("Classical", 405, 400);

    //rock
    ctx.fillStyle = "#7099FF";
    ctx.fillRect(455, rockHeight, 25, 500);
    ctx.fillText("Rock", 455, 400);
    ctx.strokeText("Rock", 455, 400);

    //rap
    ctx.fillStyle = "#D9D35D";
    ctx.fillRect(505, rapHeight, 25, 500);
    ctx.fillText("Rap", 505, 400);
    ctx.strokeText("Rap", 505, 400);

    //edm
    ctx.fillStyle = "#3776FF";
    ctx.fillRect(555, edmHeight, 25, 500);
    ctx.fillText("EDM", 555, 400);
    ctx.strokeText("EDM", 555, 400);
  };
};

const loop = () => {
  ctx.clearRect(0, 0, 600, 400);
  colorBars();
  foodBars();
  musicBars();
};

setInterval(loop, 10);

let url = "http://localhost:3000/api";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    api_data(data);
  })
  .catch((err) => console.log(err));





  

