var numberOne = Math.ceil(Math.random() * 9);
var numberTwo = Math.ceil(Math.random() * 9);
var result = numberOne * numberTwo;
var word = document.createElement('div');
word.textContent = numberOne + " * " + numberTwo + "\uB294?";
document.body.append(word);
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
document.body.append(input);
input.type = 'number';
form.append(input);
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);
var resultDiv = document.createElement('div');
document.body.append(resultDiv);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (result === Number(input.value)) {
        //정답
        resultDiv.textContent = '딩동댕';
        numberOne = Math.ceil(Math.random() * 9);
        numberTwo = Math.ceil(Math.random() * 9);
        result = numberOne * numberTwo;
        word.textContent = numberOne + " * " + numberTwo + "\uB294?";
        input.value = '';
        input.focus();
    }
    else {
        //틀린경우
        resultDiv.textContent = '땡';
        input.value = '';
        input.focus();
    }
});
