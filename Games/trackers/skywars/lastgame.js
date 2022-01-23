let gamesPlayed = 0;

let resultHistory = [];
let killHistory = [];
let corruptionHistory = [];

let previousWins,
  previousLosses,
  previousKills,
  previousDeaths,
  previousExperience,
  previousCoins,
  previousHeads,
  previousShards;
let previousEww,
  previousYucky,
  previousMeh,
  previousDecent,
  previousSalty,
  previousTasty,
  previousSucculent,
  previousDivine,
  previousHeavenly,
  previousSweet;

let lastGameWins,
  lastGameLosses,
  lastGameKills,
  lastGameDeaths,
  lastGameExperience,
  lastGameCoins,
  lastGameHeads,
  lastGameShards;
let lastGameEww,
  lastGameYucky,
  lastGameMeh,
  lastGameDecent,
  lastGameSalty,
  lastGameTasty,
  lastGameSucculent,
  lastGameDivine,
  lastGameHeavenly,
  lastGameSweet;

function initLastGameModule() {
  gamesPlayed = initial.get("wins") + initial.get("losses");
  previousWins = initial.get("wins");
  previousLosses = initial.get("losses");
  previousKills = initial.get("kills");
  previousDeaths = initial.get("deaths");
  previousExperience = initial.get("experience");
  previousCoins = initial.get("coins");
  previousHeads = initial.get("heads");
  previousShards = initial.get("shard");
  initHeads();
}

function checkFinishedGame() {
  if (current.get("wins") + current.get("losses") > gamesPlayed) {
    gamesPlayed = current.get("wins") + current.get("losses");

    lastGameWins = current.get("wins") - previousWins;
    lastGameLosses = current.get("losses") - previousLosses;
    lastGameKills = current.get("kills") - previousKills;
    lastGameDeaths = current.get("deaths") - previousDeaths;
    lastGameExperience = current.get("experience") - previousExperience;
    lastGameCoins = current.get("coins") - previousCoins;
    lastGameHeads = current.get("heads") - previousHeads;
    lastGameShards = current.get("shard") - previousShards;

    lastGameDetailedHeads();

    resultHistory[resultHistory.length] = lastGameWins > 0;
    killHistory[killHistory.length] = lastGameKills;
    corruptionHistory[corruptionHistory.length] = lastGameHeads > 0;

    previousWins = current.get("wins");
    previousLosses = current.get("losses");
    previousKills = current.get("kills");
    previousDeaths = current.get("deaths");
    previousExperience = current.get("experience");
    previousCoins = current.get("coins");
    previousHeads = current.get("heads");
    previousShards = current.get("shard");

    updateLastGameVisuals();
  }
}

function updateLastGameVisuals() {
  if (lastGameHeads > 0) {
    document.getElementById("lastGame").style.border = "1px solid #AA00AA";
  } else if (lastGameWins > 0) {
    document.getElementById("lastGame").style.border = "1px solid #00AA00";
  } else {
    document.getElementById("lastGame").style.border = "1px solid #FF5555";
  }

  document.getElementById("lgKills").innerHTML =
    "<strong>Kills</strong> — " + lastGameKills;
  document.getElementById("lgCoins").innerHTML = "+" + lastGameCoins + " Coins";
  document.getElementById("lgExperience").innerHTML =
    "+" + lastGameExperience + " Experience";
  document.getElementById("lgShards").innerHTML =
    "+" + lastGameShards + " Shards";
  if (lastGameHeads > 0) {
    document.getElementById("lgHeads").innerHTML =
      "+" + lastGameHeads + " Heads";
  } else {
    document.getElementById("lgHeads").innerHTML = "";
  }

  updateGameGridVisuals();
}

function updateGameGridVisuals() {
  let gameGrid = document.createElement("DIV");
  if (resultHistory[resultHistory.length - 1]) {
    gameGrid.classList.add("ggWin");
  } else {
    gameGrid.classList.add("ggLoss");
  }
  if (corruptionHistory[corruptionHistory.length - 1]) {
    gameGrid.classList.add("ggCorrupted");
  }
  gameGrid.innerHTML = killHistory[killHistory.length - 1];
  document.getElementById("gameGrid").appendChild(gameGrid);
}

function initHeads() {
  previousEww = initialStats.heads_eww;
  previousYucky = initialStats.heads_yucky;
  previousMeh = initialStats.heads_meh;
  previousDecent = initialStats.heads_decent;
  previousSalty = initialStats.heads_salty;
  previousTasty = initialStats.heads_tasty;
  previousSucculent = initialStats.heads_succulent;
  previousDivine = initialStats.heads_divine;
  previousHeavenly = initialStats.heads_heavenly;
  previousSweet = initialStats.heads_sweet;
}

function lastGameDetailedHeads() {
  lastGameEww = currentStats.heads_eww - previousEww;
  lastGameYucky = currentStats.heads_yucky - previousYucky;
  lastGameMeh = currentStats.heads_meh - previousMeh;
  lastGameDecent = currentStats.heads_decent - previousDecent;
  lastGameSalty = currentStats.heads_salty - previousSalty;
  lastGameTasty = currentStats.heads_tasty - previousTasty;
  lastGameSucculent = currentStats.heads_succulent - previousSucculent;
  lastGameDivine = currentStats.heads_divine - previousDivine;
  lastGameHeavenly = currentStats.heads_heavenly - previousHeavenly;
  lastGameSweet = currentStats.heads_sweet - previousSweet;
}
