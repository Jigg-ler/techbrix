/* These codes are developed by BSCpE 3-5's Mamink_mink Monkeys group; AY 2021-2022. */


/* Navigation Button */
const btn = document.querySelector(".fancy-burger");
var navpnl = document.getElementById("navpnl");
var navbtn = document.getElementById("navbar");

btn.addEventListener("click", () => {
  if (navbtn.style["border-right"] === "calc(100vw * 0.005) solid var(--neon-green)") {
    navbtn.style["border-right"] = "none";
    navpnl.style.display="flex";
    btn.querySelectorAll("span").forEach((span) => span.classList.add("open"));
  } else {
    navbtn.style["border-right"] = "calc(100vw * 0.005) solid var(--neon-green)";
    navpnl.style.display="none";
    btn.querySelectorAll("span").forEach((span) => span.classList.remove("open"));
  }
});

function saveBtn() {
  var savpnl = document.getElementById("savepnl");
  if (savpnl.style["display"] === "none") {
    savpnl.style.display="flex";
  } else {
    savpnl.style["background"] = "flex";
    savpnl.style.display="none";}

    var parts_summary = "";
    var temporary = "";

    var cpu_selected = document.getElementById("cpu").value; //yung value is in model!price format
    var cooler_selected = document.getElementById("cpu-cooler").value;
    var mobo_selected = document.getElementById("mobo").value;
    var memory_selected = document.getElementById("memory").value;
    var storage_selected = document.getElementById("storage").value;
    var gpu_selected = document.getElementById("gpu").value;
    var case_selected = document.getElementById("case").value;
    var psu_selected = document.getElementById("psu").value;

    var parts_selected = [cpu_selected, cooler_selected, mobo_selected, memory_selected, storage_selected, gpu_selected, case_selected, psu_selected];
    
    for (let x = 0; x < parts_selected.length; x++) {
      temporary = parts_selected[x].split("!"); //split yung value from option tag then kunin yung first(0) element which is yung model
      parts_summary += temporary[0] + "<br>";
    }
    
    document.getElementById("summary").innerHTML = parts_summary;
}

function closeSave() {
  var savpnl = document.getElementById("savepnl");
  if (savpnl.style["display"] === "none") {
    savpnl.style.display="flex";
  } else {
    savpnl.style["background"] = "flex";
    savpnl.style.display="none";}
}

function popupApp(currentApp)  {
  var popupPnl = document.getElementById("popupPnl");
  if (popupPnl.style["display"] === "none") {
    popupPnl.style.display="flex";
  } else {
    popupPnl.style["background"] = "flex";
    popupPnl.style.display="none";}
  
  var name = currentApp.getElementsByClassName("appName")[0].innerHTML;
  document.getElementById("popup-title").innerHTML = name;

  var specs = currentApp.getElementsByClassName("appSpecs")[0].innerHTML;
  document.getElementById("text").innerHTML = specs;
}

function closePopup() {
  var popupPnl = document.getElementById("popupPnl");
  if (popupPnl.style["display"] === "none") {
    popupPnl.style.display="flex";
  } else {
    popupPnl.style["background"] = "flex";
    popupPnl.style.display="none";}
}

function getPrice() {
    
    var tempPrice = "";
    var totalPrice = 0;

    var cpu_selected = document.getElementById("cpu").value;
    var cooler_selected = document.getElementById("cpu-cooler").value;
    var mobo_selected = document.getElementById("mobo").value;
    var memory_selected = document.getElementById("memory").value;
    var storage_selected = document.getElementById("storage").value;
    var gpu_selected = document.getElementById("gpu").value;
    var case_selected = document.getElementById("case").value;
    var psu_selected = document.getElementById("psu").value

    var parts_selected = [cpu_selected, cooler_selected, mobo_selected, memory_selected, storage_selected, gpu_selected, case_selected, psu_selected];

    for (let y = 0; y < parts_selected.length; y++) {
      tempPrice =  parts_selected[y].split("!"); //split yung value then kunin yung second (1) element which is yung price
      totalPrice += parseInt(tempPrice[1]);
    }

    document.getElementById("price-label").innerHTML = "PHP " + totalPrice;
    
}

function saveBtn_and_getPrice() {
  saveBtn();
  document.getElementById("price-label2").innerHTML = document.getElementById("price-label").innerHTML;
}

function popupBuild(currentApp)  {
  var popupPnl = document.getElementById("popupPnl");
  if (popupPnl.style["display"] === "none") {
    popupPnl.style.display="flex";
  } else {
    popupPnl.style["background"] = "flex";
    popupPnl.style.display="none";}
  
  var name = currentApp.getElementsByClassName("buildName")[0].innerHTML;
  document.getElementById("popup-title").innerHTML = name;

  var specs = currentApp.getElementsByClassName("buildSummary")[0].innerHTML;
  document.getElementById("text").innerHTML = specs;
}