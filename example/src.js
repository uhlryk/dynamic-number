import DynamicNumber from "../src/index";

window.dynamicNumberExample = function (inputElement, outputElement, options) {
  var state = {
    view: "",
    model: 0,
    cursor: 0
  };

  var dynamicNumber = new DynamicNumber();
  dynamicNumber.separator = options.separator || ".";
  dynamicNumber.integer = options.integer = 10;
  dynamicNumber.fraction = options.fraction = 10;
  dynamicNumber.positive = options.positive = true;
  dynamicNumber.negative = options.negative = true;
  dynamicNumber.thousand = options.thousand = null;

  function setDOMValues () {
    inputElement.removeEventListener("input", listener);
    outputElement.textContent = state.model;
    inputElement.value = state.view;
    inputElement.addEventListener("input", listener);
  }

  function calculate () {
    var res = dynamicNumber.calculateFromView(inputElement.value);
    if(res) {
      state.view = res.view;
      state.model = res.model;
      state.cursor = res.cursor;
    }
    setDOMValues();
  }

  function listener () {
    calculate();
  }
  calculate();
};


