function updateCurrentMap() {
  fetch(
    "https://api.hypixel.net/status?key=" + apikey + "&uuid=" + keyOwnerUuid
  )
    .then((result) => result.json())
    .then(({ session }) => {
      let map = session.map;
      document.getElementById("playerMap").innerHTML = map;
      if (map == null) {
        document.getElementById("playerMap").innerHTML = "Lobby";
      }
      let mapImage = document.getElementById("mapImage");
      switch (map) {
        case "Aegis":
          mapImage.src = "../media/aegis.png";
          break;
        case "Aquarius":
          mapImage.src = "../media/aquarius.png";
          break;
        case "Crystal Source":
          mapImage.src = "../media/crystalsource.png";
          break;
        case "Elven":
          mapImage.src = "../media/elven.png";
          break;
        case "Jinzhou":
          mapImage.src = "../media/jinzhou.png";
          break;
        case "Entangled":
          mapImage.src = "../media/entangled.png";
          break;
        case "Frostbound":
          mapImage.src = "../media/frostbound.png";
          break;
        case "Hibiscus":
          mapImage.src = "../media/hibiscus.png";
          break;
        case "Martian":
          mapImage.src = "../media/martian.png";
          break;
        case "Memorial":
          mapImage.src = "../media/memorial.png";
          break;
        case "Mountain Top":
          mapImage.src = "../media/mountaintop.png";
          break;
        case "Mythic":
          mapImage.src = "../media/mythic.png";
          break;
        case "Oceana":
          mapImage.src = "../media/oceana.png";
          break;
        case "Palette":
          mapImage.src = "../media/palette.png";
          break;
        case "Plateau":
          mapImage.src = "../media/plateau.png";
          break;
        case "Pumpkin Patch":
          mapImage.src = "../media/pumpkinpatch.png";
          break;
        case "Railroad":
          mapImage.src = "../media/railroad.png";
          break;
        case "Shaohao":
          mapImage.src = "../media/shaohao.png";
          break;
        case "Shire":
          mapImage.src = "../media/shire.png";
          break;
        case "Siege":
          mapImage.src = "../media/siege.png";
          break;
        case "Tain":
          mapImage.src = "../media/tain.png";
          break;
        case "Tribute":
          mapImage.src = "../media/tribute.png";
          break;
        case "Villa":
          mapImage.src = "../media/villa.png";
          break;
        case "Winterhelm":
          mapImage.src = "../media/winterhelm.png";
          break;
        case "Waterways":
          mapImage.src = "../media/waterways.png";
          break;
        case "Witch's Brew":
          mapImage.src = "../media/witchsbrew.png";
          break;
        case "Finale":
          mapImage.src = "../media/final.png";
          break;
        case "Northern":
          mapImage.src = "../media/northern.png";
          break;
        case "Templar":
          mapImage.src = "../media/templar.png";
          break;
        default:
          mapImage.src = "";
      }
    });
}
