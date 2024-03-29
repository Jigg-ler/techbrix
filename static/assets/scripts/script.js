/* These codes are developed by BSCpE 3-5's Mamink_mink Monkeys group; AY 2021-2022. */

/* Navigation Button */
const btn = document.querySelector(".fancy-burger");
var navpnl = document.getElementById("navpnl");
var navbtn = document.getElementById("navbar");
const submitBtn = document.getElementById("submit");
const buildName = document.getElementById("build-name");
const author = document.getElementById("author");

var coll = document.getElementsByClassName("collapsible-button");
var i;

let validation = [0, 0];

function checkForm(validation) {
  if (validation.reduce((a, b) => a + b, 0) > 1) {
    submitBtn.removeAttribute("disabled");
  }
}

if (document.title == "Build PC | TBX PC Builder") {
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.parentElement.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
  
  buildName.addEventListener("change", (event) => {
    if (buildName.value.length > 3) {
      validation[0] = 1;
      checkForm(validation);
    } else {
      validation[0] = 0;
      submitBtn.setAttribute("disabled", "disabled");
    }
  });
  
  author.addEventListener("change", (event) => {
    if (author.value.length > 3) {
      validation[1] = 1;
      checkForm(validation);
    } else {
      validation[1] = 0;
      submitBtn.setAttribute("disabled", "disabled");
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

function get_component_socket(component) {
  var component_socket = component.split("!");
  return component_socket[2];
}

function get_component_gencode(component) {
  var component_socket = component.split("!");
  return component_socket[3];
}

function get_component_max_memory(component) {
  // mobo and ram
  var component_socket = component.split("!");
  return parseInt(component_socket[4]);
}

function get_component_ddr_gen(component) {
  // for mobo and ram
  var component_socket = component.split("!");
  return component_socket[5];
}

function get_component_form_factor(component) {
  var component_socket = component.split("!");
  return component_socket[6];
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

  var parts_selected = [
    cpu_selected,
    cooler_selected,
    mobo_selected,
    memory_selected,
    storage_selected,
    gpu_selected,
    case_selected,
    psu_selected,
  ];
  return parts_selected;
}

btn.addEventListener("click", () => {
  if (navbtn.style["border-right"] !== "none") {
    console.log(navbtn.style["border-right"] );
    navbtn.style["border-right"] = "none";
    navpnl.style.display = "flex";
    console.log(navbtn.style["border-right"] );
    btn.querySelectorAll("span").forEach((span) => span.classList.add("open"));
  } else {
    navbtn.style["border-right"] =
      "calc(100vw * 0.005) solid var(--neon-green)";
    navpnl.style.display = "none";
    btn
      .querySelectorAll("span")
      .forEach((span) => span.classList.remove("open"));
  }
});

function saveBtn() {
  var savpnl = document.getElementById("savepnl");
  if (savpnl.style["display"] == "none" || " ") {
    savpnl.style.display = "flex";
  } else {
    savpnl.style["background"] = "flex";
    savpnl.style.display = "none";
  }

  var parts_summary = "";
  var parts_selected = get_all_selected_component();

  for (let x = 0; x < parts_selected.length; x++) {
    parts_summary += get_component_model(parts_selected[x]) + "<br>"; //split yung value from option tag then kunin yung first(0) element which is yung model
  }

  document.getElementById("summary").innerHTML = parts_summary;
}

function closeSave() {
  var savpnl = document.getElementById("savepnl");
  if (savpnl.style["display"] === "none") {
    savpnl.style.display = "flex";
  } else {
    savpnl.style["background"] = "flex";
    savpnl.style.display = "none";
  }
}

function popupApp(currentApp) {
  var popupPnl = document.getElementById("popupPnl");
  if (popupPnl.style["display"] == "none" || " ") {
    popupPnl.style.display = "flex";
  } else {
    popupPnl.style["background"] = "flex";
    popupPnl.style.display = "none";
  }

  var name = currentApp.getElementsByClassName("appName")[0].innerHTML;
  document.getElementById("popup-title").innerHTML = name;

  var specs = currentApp.getElementsByClassName("appSpecs")[0].innerHTML;
  document.getElementById("text").innerHTML = specs;
}

function closePopup() {
  var popupPnl = document.getElementById("popupPnl");
  if (popupPnl.style["display"] === "none") {
    popupPnl.style.display = "flex";
  } else {
    popupPnl.style["background"] = "flex";
    popupPnl.style.display = "none";
  }
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
  document.getElementById("price-label2").innerHTML =
    document.getElementById("price-label").innerHTML;
}

function popupBuild(currentApp) {
  var popupPnl = document.getElementById("popupPnl");
  if (popupPnl.style.display == "none" || " ") {
    popupPnl.style.display = "flex";
  } else {
    popupPnl.style["background"] = "flex";
    popupPnl.style.display = "none";
  }

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
  var component_model = get_component_model(
    get_selected_component(componentId)
  ).split(" "); //string of component model(name) > splits string by space > joins them with '+' for search
  var temp = component_model.join("%20");
  var baseUrlStrings = {
    easypc: `https://easypc.com.ph/pages/search-results-page?q=${temp}`,
    datablitz: `https://ecommerce.datablitz.com.ph/search?type=product&q=${temp}`,
    pcexpress: `https://pcx.com.ph/?s=${temp}&id=120558&post_type=product`,
    pchub: `https://pchubonline.com/browse?q=${temp}`,
    amazon: `https://www.amazon.com/s?k=${temp}`,
  };

  console.log(buttonId);
  if (component_model != "none") {
    return baseUrlStrings[buttonId];
  } else {
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
  var memory_model = get_component_model(
    document.getElementById("memory").value
  );
  var case_model = get_component_model(document.getElementById("case").value);

  var cpu_gen = get_component_gencode(document.getElementById("cpu").value);
  var mobo_chipset = get_component_gencode(
    document.getElementById("mobo").value
  ).split("-");

  var cpu_socket = get_component_socket(document.getElementById("cpu").value);
  var mobo_socket = get_component_socket(document.getElementById("mobo").value);

  var mobo_max_mem = get_component_max_memory(
    document.getElementById("mobo").value
  );
  var ram_max_mem = get_component_max_memory(
    document.getElementById("memory").value
  );

  var mobo_ddr_gen = get_component_ddr_gen(
    document.getElementById("mobo").value
  ).split("-");
  var memory_ddr_gen = get_component_ddr_gen(
    document.getElementById("memory").value
  );

  var mobo_form_factor = get_component_form_factor(
    document.getElementById("mobo").value
  );
  var case_form_factor = get_component_form_factor(
    document.getElementById("case").value
  );

  //var test_string = cpu_model + " " + cpu_gen + "<br>" + mobo_model + " " + mobo_chipset + "<br>";

  //document.getElementById("compCheck").innerHTML = test_string; //testing, pero di ko pa machange yung paragraph element

  var success = 0;
  var need_update = false;
  var is_intel = false;
  var is_amd = false;

  var mem_success = 0;

  var comp_status = "";

  //aactivate lang siya kapag may laman na yung CPU, MOTHERBOARD, at MEMORY para may maicompare siya
  if (cpu_model != "none" && mobo_model != "none" && memory_model != "none") {
    //  main block

    //  socket check
    if (mobo_socket == cpu_socket) {
      //  manufacturer check
      if (cpu_gen.slice(-1) == "i") {
        is_intel = true;
      }

      if (cpu_gen.slice(-1) == "a") {
        is_amd = true;
      }

      //  chip set check
      for (let z = 0; z < mobo_chipset.length; z++) {
        if (cpu_gen == mobo_chipset[z]) {
          // console.log("chipset matched!")
          success += 1;
        }

        //  boards that might need BIOS update
        if (mobo_chipset[z] == "semi") {
          need_update = true;
        } else {
          //  chipset mismatch catch
          //console.log("chipset mismatch")
        }
      }

      //  status generator
      if (success == 0) {
        comp_status =
          cpu_model +
          " is incompatible with " +
          mobo_model +
          " (chipset mismatched)<br>";
      } else {
        if (is_intel) {
          //  need BIOS updated Intel boards
          if (need_update && parseInt(cpu_gen.slice(0, -1)) % 2 == 1) {
            comp_status =
              mobo_model +
              " might need BIOS update to work with " +
              cpu_model +
              "<br>";
            //console.log(success);
          }
        }

        if (is_amd) {
          //  need BIOS update AMD boards, usually kasi 3000-4000 series ng AMD yung kailangan ng update kapag a320
          if (
            need_update &&
            (cpu_gen.slice(0, -1) == 3 ||
              cpu_gen.slice(0, -1) == 4 ||
              cpu_gen.slice(0, -1) == 5)
          ) {
            comp_status =
              mobo_model +
              " might need BIOS update to work with " +
              cpu_model +
              "<br>";
            //console.log(success);
          }
        }
      }
    } else {
      // incompatible socket catch
      comp_status =
        cpu_model +
        " is incompatible with " +
        mobo_model +
        " (socket mismatched)<br>";
      // console.log("socket mismatch")
    }

    // RAM check
    for (let y = 0; y < mobo_ddr_gen.length; y++) {
      if (memory_ddr_gen == mobo_ddr_gen[y]) {
        mem_success += 1;
      }
    }

    // status generator
    if (mem_success == 0) {
      comp_status += mobo_model + " only supports " + mobo_ddr_gen + "<br>";
    }

    if (ram_max_mem > mobo_max_mem) {
      comp_status +=
        mobo_model + " only supports " + mobo_max_mem + "gbs of RAM";
    }
  } else {
    // if di pa naseselect yung 3 major components to be checked (cpu, mobo, ram)
    document.getElementById("compCheck").innerHTML = "";
  }

  if (mobo_model && case_model) {
    if (mobo_form_factor > case_form_factor) {
      comp_status += mobo_model + " may not fit in " + case_model;
    }
  }

  document.getElementById("compCheck").innerHTML = comp_status;

  // for debugging
  console.log("CPU info");
  console.log(cpu_model);
  console.log("Socket: " + cpu_socket);
  console.log("Chipset: " + cpu_gen);
  console.log("-------");
  console.log("MOBO info");
  console.log(mobo_model);
  console.log("Socket: " + mobo_socket);
  console.log("Chipset: " + mobo_chipset);
  console.log("Max memory supp: " + mobo_max_mem);
  console.log("Memory ddr gen: " + mobo_ddr_gen);
  console.log("FormF: " + String(mobo_form_factor));
  console.log("-------");
  console.log("Case info");
  console.log(case_model);
  console.log("case " + String(case_form_factor));
}

function functions_on_change() {
  getPrice();
  test_compatibility();
}
