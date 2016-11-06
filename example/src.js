import DynamicNumber from "../src/index";

window.dynamicNumberExample = function (inputElement, outputElement, options) {
  var state = {
    viewValue: 0,
    modelValue: 0
  }
  var dynamicNumber = new DynamicNumber();
  dynamicNumber.separator = options.separator || ".";
  dynamicNumber.integer = options.integer = 10;
  dynamicNumber.fraction = options.fraction = 10;
  dynamicNumber.positive = options.positive = true;
  dynamicNumber.negative = options.negative = true;
  dynamicNumber.thousand = options.thousand = null;

  function calculate (dynamicNumber, inputElement, outputElement, state) {
    dynamicNumber.calculate(inputElement.value, state.modelValue, state.viewValue);
    state.modelValue = dynamicNumber.modelValue;
    state.viewValue = dynamicNumber.viewValue;
    inputElement.removeEventListener("input", listener);
    outputElement.textContent = state.modelValue;
    inputElement.value = state.viewValue;
    inputElement.addEventListener("input", listener);
  }

  function listener (ev) {
    calculate(dynamicNumber, inputElement, outputElement, state);
  }

  dynamicNumber.calculate(inputElement.value, state.modelValue, state.viewValue);
  state.modelValue = dynamicNumber.modelValue;
  state.viewValue = dynamicNumber.viewValue;
  outputElement.textContent = state.modelValue;
  inputElement.value = state.viewValue;

  inputElement.addEventListener("input", listener);
};


