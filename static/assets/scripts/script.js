/* These codes are developed by BSCpE 3-5's Mamink_mink Monkeys group; AY 2021-2022. */


/* Navigation Button */
const btn = document.querySelector(".fancy-burger");
var navpnl = document.getElementById("navpnl");
var navbtn = document.getElementById("navbar");

var coll = document.getElementsByClassName("collapsible-button");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.parentElement.nextElementSibling;
    console.log(content)
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function get_component_model(component) {
  var component_model = component.split("!");
  return component_model[0];
}

function get_component_price(component) {
  var component_price = component.split("!");
  return parseInt(component_price[1]);
}

function get_component_socket(component){
  var component_socket = component.split("!");
  return component_socket[2];
}

function get_component_gencode(component) {
  var component_socket = component.split("!");
  return component_socket[3];
}

function get_component_max_memory(component) {
  var component_socket = component.split("!");
  return component_socket[4];
}

function get_all_selected_component() {
  var cpu_selected = document.getElementById("cpu").value;
  var cooler_selected = document.getElementById("cpu-cooler").value;
  var mobo_selected = document.getElementById("mobo").value;
  var memory_selected = document.getElementById("memory").value;
  var storage_selected = document.getElementById("storage").value;
  var gpu_selected = document.getElementById("gpu").value;
  var case_selected = document.getElementById("case").value;
  var psu_selected = document.getElementById("psu").value;
  
  var parts_selected = [cpu_selected, cooler_selected, mobo_selected, memory_selected, storage_selected, gpu_selected, case_selected, psu_selected];
  return parts_selected
}

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
    var parts_selected = get_all_selected_component();
    
    for (let x = 0; x < parts_selected.length; x++) {
      parts_summary += (get_component_model(parts_selected[x]) + "<br>"); //split yung value from option tag then kunin yung first(0) element which is yung model
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
  var totalPrice = 0;
  var parts_selected = get_all_selected_component();

  for (let y = 0; y < parts_selected.length; y++) {
    totalPrice += get_component_price(parts_selected[y]);
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

function get_selected_component(componentId) {
  var component_selected = document.getElementById(componentId).value;

  return component_selected;
}

function searchComponentInStore(componentId, buttonId) {
  var component_model = get_component_model( get_selected_component(componentId) ).split(" "); //string of component model(name) > splits string by space > joins them with '+' for search
  var baseUrlStrings = {
    easypc: "https://easypc.com.ph/pages/search-results-page?q=",
    datablitz: "https://ecommerce.datablitz.com.ph/search?type=product&q=",
    pcexpress: "https://pcx.com.ph/?s=${}&id=120558&post_type=product",
    pchub: "https://pchubonline.com/browse?q="
  };
  
  console.log(buttonId);
  if (component_model != "none") {
    //var baseUrlString = "https://easypc.com.ph/pages/search-results-page?q=";
    
    console.log(component_model);

    var temp = component_model.join("%20");
      //console.log(temp);
    var searchUrl = baseUrlStrings[buttonId].concat(temp);
      //console.log(searchUrl);
    return searchUrl;
  }
  
  else {
    pass; //temporary pass muna. but it works naman :/
  }

  
}
/*
function searchComponentDatablitz(componentId) {
  var component_model = get_component_model( get_selected_component(componentId) ).split(" "); //string of component model(name) > splits string by space > joins them with '+' for search
  if (component_model != "none") {
    var baseUrlString = "https://ecommerce.datablitz.com.ph/search?type=product&q=";

    var temp = component_model.join("+");
      //console.log(temp);
    var searchUrl = baseUrlString.concat(temp);
      //console.log(searchUrl);
    return searchUrl;

  }

  else {
    pass; //temporary pass muna. but it works naman :/
  }
  
}*/

function test_compatibility() {
  
  var cpu_model = get_component_model(document.getElementById("cpu").value);
  var mobo_model = get_component_model(document.getElementById("mobo").value);
  var memory_model = get_component_model(document.getElementById("memory").value);

  var cpu_gen = get_component_gencode(document.getElementById("cpu").value);
  var mobo_chipset = get_component_gencode(document.getElementById("mobo").value).split("-");

  var cpu_socket = get_component_socket(document.getElementById("cpu").value);
  var mobo_socket = get_component_socket(document.getElementById("mobo").value);
  
  //var test_string = cpu_model + " " + cpu_gen + "<br>" + mobo_model + " " + mobo_chipset + "<br>";
  
  //document.getElementById("compCheck").innerHTML = test_string; //testing, pero di ko pa machange yung paragraph element
  

  var success = 0;
  var need_update = false;
  var is_intel = false;
  var is_amd = false;


  //aactivate lang siya kapag may laman na yung CPU, MOTHERBOARD, at MEMORY para may maicompare siya
  if (cpu_model != "none" && mobo_model != "none" && memory_model != "none") {
    //  main block

    //  socket check
    if (mobo_socket == cpu_socket) {

      //  manufacturer check
      if (cpu_gen.slice(-1) == "i"){
        is_intel = true;
      }

      if (cpu_gen.slice(-1) == "a"){
        is_amd = true;
      }
      
      //  chip set check
      for (let z = 0; z < mobo_chipset.length; z++) {
        if (cpu_gen == mobo_chipset[z]) {
          console.log("chipset matched!")
          success += 1;
        }

        //  boards that might need BIOS update
        if (mobo_chipset[z] == "semi"){
          need_update = true;
        }

        else{ //  chipset mismatch catch
          console.log("chipset mismatch")
        }
      }

      //  status generator
      if (success == 0) {
        document.getElementById("compCheck").innerHTML = cpu_model + " is incompatible with " + mobo_model;
      }
      else {
        if (is_intel) { //  need BIOS updated Intel boards
          if (need_update && parseInt(cpu_gen.slice(0,-1)) % 2 == 1) {
            document.getElementById("compCheck").innerHTML = mobo_model + " might need BIOS update to work with " + cpu_model;
            console.log(success);
          }
          else { // no compatibility issues catch
            document.getElementById("compCheck").innerHTML = "no compatibility issues :D";
            console.log(success);
          }

        }

        if (is_amd) { //  need BIOS update AMD boards, usually kasi 3000 series ng AMD yung kailangan ng update
          if (need_update && parseInt(cpu_gen.slice(0)) == 3) {
            document.getElementById("compCheck").innerHTML = mobo_model + " might need BIOS update to work with " + cpu_model;
            console.log(success);
          }

          else { // no compatibility issues catch
            document.getElementById("compCheck").innerHTML = "no compatibility issues :D";
            console.log(success);
          }
        }
      }

    }
    else { // incompatible socket catch
      document.getElementById("compCheck").innerHTML = cpu_model + " is incompatible with " + mobo_model + "(socket mismatched)";
      console.log("socket mismatch")
    }
    
  }
  else { // if di pa naseselect yung 3 major components to be checked (cpu, mobo, ram)
    document.getElementById("compCheck").innerHTML = "";
  }

}

function functions_on_change() {
  getPrice();
  test_compatibility();
}
