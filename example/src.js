import DynamicNumber from "../src/index";

window.dynamicNumberExample = function (inputElement, outputElement, options) {

  function calculate (dynamicNumber, inputElement, outputElement, modelValue, viewValue) {
    dynamicNumber.calculate(inputElement.value, modelValue, viewValue);
    modelValue = dynamicNumber.modelValue;
    viewValue = dynamicNumber.viewValue;
    inputElement.removeEventListener("input", listener);
    outputElement.textContent = modelValue;
    inputElement.value = viewValue;
    inputElement.addEventListener("input", listener);
  }

  function listener (ev) {
    calculate(dynamicNumber, inputElement, outputElement, modelValue, viewValue);
  }

  var dynamicNumber = new DynamicNumber();
  dynamicNumber.separator = options.separator || ".";
  dynamicNumber.integer = options.integer = 10;
  dynamicNumber.fraction = options.fraction = 10;
  dynamicNumber.positive = options.positive = true;
  dynamicNumber.negative = options.negative = true;
  dynamicNumber.thousand = options.thousand = null;

  var modelValue = 0;
  var viewValue = 0;
  dynamicNumber.calculate(inputElement.value, modelValue, viewValue);
  modelValue = dynamicNumber.modelValue;
  viewValue = dynamicNumber.viewValue;
  outputElement.textContent = modelValue;
  inputElement.value = viewValue;

  inputElement.addEventListener("input", listener);
};


