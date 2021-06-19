var counter = document.getElementById("counter");
var followers = document.getElementById("followers");
let count = 1;
setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
}, 10);
setTimeout(() => {
  followers.innerText = "Congrats!!!Shini";
}, 12000);
