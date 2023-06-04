const nameInput = document.querySelector('#name-input');
const nameOutPut = document.querySelector('#name-output');
nameInput.addEventListener('input', onTextInput);
function onTextInput(event) { nameOutPut.textContent = event.currentTarget.value;
if (nameInput = '') {
        nameOutPut = 'Anonymous'
    } else {
        nameOutPut.textContent = event.currentTarget.value
    }
}