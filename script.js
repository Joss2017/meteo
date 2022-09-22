fetch("https://www.prevision-meteo.ch/services/json/bagnolet")
  .then((reponse) => reponse.json())
  .then((data) => {
    console.log(data);
    document.getElementById("ville").innerHTML =
      "<p>" + data.city_info.name + "</p>";
    document.getElementById("date").innerHTML =
      "<p>" + data.current_condition.date + "</p>";
    document.getElementById("logo").innerHTML =
      '<img src="' + data.current_condition.icon_big + '">';
    document.getElementById("degre").innerHTML =
      "<p>" + data.current_condition.tmp + "</p>";
    document.getElementById("com").innerHTML =
      "<p>" + data.current_condition.condition + "</p>";
    document.getElementById("humide").innerHTML =
      "<p>" + data.current_condition.humidity + "</p>";
  });
