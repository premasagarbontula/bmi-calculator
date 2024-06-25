const button = document.getElementById("button");
button.onclick = () => {
  const height = parseInt(document.getElementById("height").value) / 100;
  const weight = parseInt(document.getElementById("weight").value);
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(1);
  document.getElementById("result").textContent =
    "Your BMI Index is " + bmi + "😊";
};
