
const input = document.querySelector('#validation-input')

const RuleSymbolLength = input.dataset.length;

input.addEventListener('blur', onCheckSymbols);

function onCheckSymbols(event) {
    const symbolsLength = event.currentTarget.value.length;

    if (symbolsLength === RuleSymbolLength) {
        input.classList.add('valid');
        input.classList.remove('invalid')
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid')
    }
}