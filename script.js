
let dailyEnergy = 12.8;
let weeklyEnergy = 84.6;
let monthlyEnergy = 342.5;
let totalSteps = 1284;



document.getElementById("dailyEnergy").innerText = dailyEnergy;
document.getElementById("weeklyEnergy").innerText = weeklyEnergy;
document.getElementById("monthlyEnergy").innerText = monthlyEnergy;

document.getElementById("steps").innerText =
    totalSteps.toLocaleString();

document.getElementById("heroEnergy").innerText =
    dailyEnergy;



setInterval(function () {

    dailyEnergy += 0.1;
    totalSteps += 1;

    document.getElementById("dailyEnergy").innerText =
        dailyEnergy.toFixed(1);

    document.getElementById("heroEnergy").innerText =
        dailyEnergy.toFixed(1);

    document.getElementById("steps").innerText =
        totalSteps.toLocaleString();

}, 5000);