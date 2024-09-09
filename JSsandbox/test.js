// const button = document.getElementById("button");
// const button1= document.getElementById("button1");

// async function func(){
//     // return "fyttftf";
//     throw new Error;
// }
// const res=func();
// console.log(res)

// const logOnClk = () => {
//     button.addEventListener("click", () => console.log("clicked"));
// }

// logOnClk();

// const promiseLog = new Promise((resolve) => {
//   button.addEventListener("click", () => {
//     resolve("promise resolved!");
//   });
// });

// promiseLog.then((message) => {
//   console.log(message);
// });

// const promiseLogRej = new Promise((resolve,rej) => {
//     button1.addEventListener("click", () => {
//       rej("promise rejected");
//     });
//   });

//   promiseLogRej.catch((message) => {
//     console.log(message);
//   });

const circCoor = [];

const printClk = (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const radius = Math.random() * 200 + 10;
  const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;

  const circle = document.createElement("div");
  circle.classList.add("circleId");

  circle.style.left = `${x - radius / 2}px`;
  circle.style.top = `${y - radius / 2}px`;
  circle.style.width = `${radius}px`;
  circle.style.height = `${radius}px`;
  circle.style.borderRadius = "50%";
  circle.style.backgroundColor = randomColor;
  circCoor.push({ x, y, radius });
  document.body.appendChild(circle);

  const totalCircles = document.querySelectorAll(".circleId");

  const logIfIntersecting = () => {
    const firstCircCoor = circCoor[0];
    const secondCircCoor = circCoor[1];
    const x1 = firstCircCoor.x;
    const x2 = secondCircCoor.x;
    const y1 = firstCircCoor.y;
    const y2 = secondCircCoor.y;
    const r1 = firstCircCoor.radius;
    const r2 = secondCircCoor.radius;

    const isIntersecting = Math.hypot(x1 - x2, y1 - y2) <= r1 / 2 + r2 / 2;
    if (isIntersecting) return "they're intersecting";
    else return "they're not intersecting";
  };

  if (totalCircles.length == 3) {
    totalCircles.forEach((circle) => {
      document.body.removeChild(circle);
    });

    console.log(logIfIntersecting());
    circCoor.length = 0;
  }
};

document.addEventListener("click", printClk);
