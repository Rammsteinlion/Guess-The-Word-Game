const btnRandom = document.querySelector(".btn_random");
const btnReset = document.querySelector(".btn_reset");

btnRandom.addEventListener("click", function () {
  const random = generateRandom(6);
  console.log(random);
});

function generateRandom(num) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
