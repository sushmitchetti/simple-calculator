let input = '';
let result = document.getElementById('result');

function addInput(value) {
	input += value;
	result.value = input;
}

function calculate() {
	result.value = eval(input);
	input = '';
}

function clearResult() {
	result.value = '';
	input = '';
}

function deleteLast() {
	input = input.slice(0, -1);
	result.value = input;
}