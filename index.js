const oneAmElement = document.querySelector("#user-input1");
const twoAmElement = document.querySelector("#user-input2");
const threeAmElement = document.querySelector("#user-input3");
const fourAmElement = document.querySelector("#user-input4");
const fiveAmElement = document.querySelector("#user-input5");
const sixAmElement = document.querySelector("#user-input6");
const sevenAmElement = document.querySelector("#user-input7");
const eightAmElement = document.querySelector("#user-input8");
const nineAmElement = document.querySelector("#user-input9");
const tenAmElement = document.querySelector("#user-input10");
const elevenAmElement = document.querySelector("#user-input11");
const twelevePmElement = document.querySelector("#user-input12");
const onePmElement = document.querySelector("#user-input1");
const twoPmElement = document.querySelector("#user-input2");
const threePmElement = document.querySelector("#user-input3");
const fourPmElement = document.querySelector("#user-input4");
const fivePmElement = document.querySelector("#user-input5");
const saveBtn = document.querySelector("#save");
const today = document.querySelector("#currentDay");
const momentElement = moment().hours(Number);

today.innerHTML = momentElement;
$(document).ready(() => {
  // listen for save button clicks
  $(".saveBtn").on("click", function() {
    // get nearby values
    const value = $(this)
      .siblings(".description")
      .val();
    const time = $(this)
      .parent()
      .attr("id");

    // save in localStorage
    localStorage.setItem(time, value);
  });

  const oneElem = oneAmElement.value;
  const twoElem = twoAmElement.value;
  const threeElem = threeAmElement.value;
  const fourElem = fourAmElement.value;
  const fiveElem = fiveAmElement.value;
  const sixElem = sixAmElement.value;
  const sevenElem = sevenAmElement.value;
  const eightElem = egihtAmElement.value;
  const nineElem = nineAmElement.value;
  const tenElem = tenAmElement.value;
  const elevenElem = elevenAmElement.value;
  const twelveElem = twelevePmElement.value;

  localStorage.setItem("1AM-UR", JSON.stringify(oneElem));
  localStorage.setItem("2AM-UR", JSON.stringify(twoElem));
  localStorage.setItem("3AM-UR", JSON.stringify(threeElem));
  localStorage.setItem("4AM-UR", JSON.stringify(fourElem));
  localStorage.setItem("5AM-UR", JSON.stringify(fiveElem));
  localStorage.setItem("6AM-UR", JSON.stringify(sixElem));
  localStorage.setItem("7AM-UR", JSON.stringify(sevenElem));
  localStorage.setItem("8AM-UR", JSON.stringify(eightElem));
  localStorage.setItem("9AM-UR", JSON.stringify(nineElem));
  localStorage.setItem("10AM-UR", JSON.stringify(tenElem));
  localStorage.setItem("11AM-UR", JSON.stringify(elevenElem));
  localStorage.setItem("12PM-UR", JSON.stringify(twelveElem));
  localStorage.setItem("1PM-UR", JSON.stringify(oneElem));
  localStorage.setItem("2PM-UR", JSON.stringify(twoElem));
  localStorage.setItem("3PM-UR", JSON.stringify(threeELem));
  localStorage.setItem("4PM-UR", JSON.stringify(fourElem));
  localStorage.setItem("5PM-UR", JSON.stringify(fiveElem));
});

displayText();

function displayText() {
  const oneAM = JSON.parse(localStorage.getItem("1AM-UR"));
  const twoAM = JSON.parse(localStorage.getItem("2AM-UR"));
  const threeAM = JSON.parse(localStorage.getItem("3AM-UR"));
  const fourAM = JSON.parse(localStorage.getItem("4AM-UR"));
  const fiveAM = JSON.parse(localStorage.getItem("5AM-UR"));
  const sixAM = JSON.parse(localStorage.getItem("6AM-UR"));
  const sevenAM = JSON.parse(localStorage.getItem("7AM-UR"));
  const eightAM = JSON.parse(localStorage.getItem("8AM-UR"));
  const nineAM = JSON.parse(localStorage.getItem("9AM-UR"));
  const tenAM = JSON.parse(localStorage.getItem("10AM-UR"));
  const elevenAM = JSON.parse(localStorage.getItem("11AM-UR"));
  const twelevePM = JSON.parse(localStorage.getItem("12PM-UR"));
  const onePM = JSON.parse(localStorage.getItem("1PM-UR"));
  const twoPM = JSON.parse(localStorage.getItem("2PM-UR"));
  const threePM = JSON.parse(localStorage.getItem("3PM-UR"));
  const fourPM = JSON.parse(localStorage.getItem("4PM-UR"));
  const fivePM = JSON.parse(localStorage.getItem("5PM-UR"));

  oneAmElement.value = oneAm;
  twoAmElement.value = twoAm;
  threeAmElement.value = threeAm;
  fourAmElement.value = fourAM;
  fiveAmElement.value = fiveAm;
  sixAmElement.value = sixAM;
  sevenAmElement.value = sevenAm;
  eightAmElement.value = eightAm;
  nineAmElement.value = nineAM;
  tenAmElement.value = tenAM;
  elevenAmElement.value = elevenAM;
  twelevePmElement.value = twelevePM;
  onePmElement.value = onePM;
  twoPmElement.value = twoPM;
  threePmElement.value = threePM;
  fourPmElement.value = fourPM;
  fivePmElement.value = fivePM;
  //time save and
  if (moment().format("HH") === $(oneAmElement).attr("data-time")) {
    {
      $(oneAmElement).css("backgroundColor", "lightgray");
    }
  } else if (moment().format("HH") > $(oneAmElement).attr("data-time")) {
    {
      $(oneAmElement).css("backgroundColor", "red");
    }
  } else {
    $(twoAmElement).css("backgroundColor", "green");
  }

  if (moment().format("HH") === $(twoAmElement).attr("data-time")) {
    {
      $(twoAmElement).css("backgroundColor", "lightgray");
    }
  } else if (moment().format("HH") > $(twoAmElement).attr("data-time")) {
    {
      $(twoAmElement).css("backgroundColor", "red");
    }
  } else {
    $(twoAmElement).css("backgroundColor", "green");
  }

  if (moment().format("HH") === $(threeAmElement).attr("data-time")) {
    {
      $(threeAmElement).css("backgroundColor", "lightgray");
    }
  } else if (moment().format("HH") > $(threeAmElement).attr("data-time")) {
    {
      $(threeAmElement).css("backgroundColor", "red");
    }
  } else {
    $(threeAmElement).css("backgroundColor", "green");
  }

  if (moment().format("HH") === $(fourAmElement).attr("data-time")) {
    {
      $(fourAmElement).css("backgroundColor", "lightgray");
    }
  } else if (moment().format("HH") > $(fourAmElement).attr("data-time")) {
    {
      $(fourAmElement).css("backgroundColor", "red");
    }
  } else {
    $(fourAmElement).css("backgroundColor", "green");
  }

  if (moment().format("HH") === $(fiveAmElement).attr("data-time")) {
    {
      $(fiveAmElement).css("backgroundColor", "lightgray");
    }
  } else if (moment().format("HH") > $(fiveAmElement).attr("data-time")) {
    {
      $(fiveAmElement).css("backgroundColor", "red");
    }
  } else {
    $(fiveAmElement).css("backgroundColor", "green");
  }

  if (moment().format("HH") === $(sixAmElement).attr("data-time")) {
    {
      $(sixAmElement).css("backgroundColor", "lightgray");
    }
  } else if (moment().format("HH") > $(sixAmElement).attr("data-time")) {
    {
      $(sixAmElement).css("backgroundColor", "red");
    }
  } else {
    $(sixAmElement).css("backgroundColor", "green");
  }

  if (moment().format("HH") === $(sevenAmElement).attr("data-time")) {
    {
      $(sevenAmElement).css("backgroundColor", "lightgray");
    }
  } else if (moment().format("HH") > $(sevenAmElement).attr("data-time")) {
    {
      $(sevenAmElement).css("backgroundColor", "red");
    }
  } else {
    $(sevenAmElement).css("backgroundColor", "green");
  }

  if (moment().format("HH") === $(eightAmElement).attr("data-time")) {
    {
      $(eightAmElement).css("backgroundColor", "lightgray");
    }
  } else if (moment().format("HH") > $(eightAmElement).attr("data-time")) {
    {
      $(eightAmElement).css("backgroundColor", "red");
    }
  } else {
    $(eightAmElement).css("backgroundColor", "green");
  }

  if (moment().format("HH") === $(nineAmElement).attr("data-time")) {
    {
      $(nineAmElement).css("backgroundColor", "lightgray");
    }
  } else if (moment().format("HH") > $(nineAmElement).attr("data-time")) {
    {
      $(nineAmElement).css("backgroundColor", "red");
    }
  } else {
    $(nineAmElement).css("backgroundColor", "green");
  }

  if (moment().format("HH") === $(tenAmElement).attr("data-time")) {
    {
      $(tenAmElement).css("backgroundColor", "red");
    }
  } else if (moment().format("HH") > $(tenAmElement).attr("data-time")) {
    {
      $(tenAmElement).css("backgroundColor", "green");
    }
  } else {
    $(tenAmElement).css("backgroundColor", "lightgray");
  }

  if (moment().format("HH") === $(elevenAmElement).attr("data-time")) {
    {
      $(elevenAmElement).css("backgroundColor", "red");
    }
  } else if (moment().format("HH") > $(elevenAmElement).attr("data-time")) {
    {
      $(elevenAmElement).css("backgroundColor", "green");
    }
  } else {
    $(elevenAmElement).css("backgroundColor", "lightgray");
  }

  if (moment().format("HH") === $(twelevePmElement).attr("data-time")) {
    {
      $(twelevePmElement).css("backgroundColor", "red");
    }
  } else if (moment().format("HH") > $(twelevePmElement).attr("data-time")) {
    {
      $(twelevePmElement).css("backgroundColor", "green");
    }
  } else {
    $(twelevePmElement).css("backgroundColor", "lightgray");
  }

  if (moment().format("HH") === $(onePmElement).attr("data-time")) {
    {
      $(onePmElement).css("backgroundColor", "red");
    }
  } else if (moment().format("HH") > $(onePmElement).attr("data-time")) {
    {
      $(onePmElement).css("backgroundColor", "green");
    }
  } else {
    $(onePmElement).css("backgroundColor", "lightgray");
  }

  if (moment().format("HH") === $(twoPmElement).attr("data-time")) {
    {
      $(twoPmElement).css("backgroundColor", "red");
    }
  } else if (moment().format("HH") > $(twoPmElement).attr("data-time")) {
    {
      $(twoPmElement).css("backgroundColor", "green");
    }
  } else {
    $(twoPmElement).css("backgroundColor", "lightgray");
  }

  if (moment().format("HH") === $(threePmElement).attr("data-time")) {
    {
      $(threePmElement).css("backgroundColor", "gray");
    }
  } else if (moment().format("HH") > $(threePmElement).attr("data-time")) {
    {
      $(threePmElement).css("backgroundColor", "red");
    }
  } else {
    $(threePmElement).css("backgroundColor", "green");
  }

  if (moment().format("HH") == $(fourPmElement).attr("data-time")) {
    {
      $(fourPmElement).css("backgroundColor", "gray");
    }
  } else if (moment().format("HH") > $(fourPmElement).attr("data-time")) {
    {
      $(fourPmElement).css("backgroundColor", "red");
    }
  } else {
    $(fourPmElement).css("backgroundColor", "green");
  }

  if (moment().format("HH") === $(fivePmElement).attr("data-time")) {
    {
      $(fivePmElement).css("backgroundColor", "gray");
    }
  } else if (moment().format("HH") > $(fivePmElement).attr("data-time")) {
    {
      $(fivePmElement).css("backgroundColor", "red");
    }
  } else {
    $(fivePmElement).css("backgroundColor", "green");
  }
}
