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
    ctx.fillRect(35, blueHeight, 25, 500);
    ctx.fillText("Blue", 35, 400);
    ctx.strokeText("Blue", 35, 400);

    //green bar
    ctx.fillStyle = "#00D624";
    ctx.fillRect(65, greenHeight, 25, 500);
    ctx.fillText("Green", 65, 400);
    ctx.strokeText("Green", 65, 400);

    //yellow bar
    ctx.fillStyle = "#FFE400";
    ctx.fillRect(95, yellowHeight, 25, 500);
    ctx.fillText("Yellow", 95, 400);
    ctx.strokeText("Yellow", 95, 400);
  };

  foodBars = () => {
    //pizza
    ctx.fillStyle = "#D4AC42";
    ctx.fillRect(125, pizzaHeight, 25, 500);
    ctx.fillText("Pizza", 125, 400);
    ctx.strokeText("Pizza", 125, 400);
    //cheese burger
    ctx.fillStyle = "#AD0BD6";
    ctx.fillRect(155, cheesBurgerHeight, 25, 500);
    ctx.fillText("Burger", 155, 400);
    ctx.strokeText("Burger", 155, 400);
    //icecream
    ctx.fillStyle = "#5DFFB7";
    ctx.fillRect(185, iceCreamHeight, 25, 500);
    ctx.fillText("IceCream", 185, 400);
    ctx.strokeText("IceCream", 185, 400);
    //steak
    ctx.fillStyle = "#F07013";
    ctx.fillRect(215, SteakHeight, 25, 500);
    ctx.fillText("Steak", 215, 400);
    ctx.strokeText("Steak", 215, 400);
  };

  musicBars = () => {
    //classical
    ctx.fillStyle = "#ff1493";
    ctx.fillRect(245, classicHeight, 25, 500);
    ctx.fillText("Classical", 245, 400);
    ctx.strokeText("Classical", 245, 400);

    //rock
    ctx.fillStyle = "#7099FF";
    ctx.fillRect(275, rockHeight, 25, 500);
    ctx.fillText("Rock", 275, 400);
    ctx.strokeText("Rock", 275, 400);

    //rap
    ctx.fillStyle = "#D9D35D";
    ctx.fillRect(305, rapHeight, 25, 500);
    ctx.fillText("Rap", 305, 400);
    ctx.strokeText("Rap", 305, 400);

    //edm
    ctx.fillStyle = "#3776FF";
    ctx.fillRect(335, edmHeight, 25, 500);
    ctx.fillText("EDM", 335, 400);
    ctx.strokeText("EDM", 335, 400);
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
