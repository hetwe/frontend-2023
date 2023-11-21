/**
 * Кастомная валидация с добавление дополнительного элемента в html
 */


const validateFields = ['firstName', 'lastName', 'middleName', 'email', 'phone'];

const NAME_PATTERN = /^[А-Яа-я]{2,}$/;
const PHONE_PATTERN = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validateFieldsConfig = {
    'firstName': {
        pattern: NAME_PATTERN,
        errorMessage: 'Имя должно состоять из (кириллицы, одной заглавной буквы, от трех символов)'
    },
    'lastName': {
        pattern: NAME_PATTERN,
        errorMessage: 'Фамилия должно состоять из (кириллицы, одной заглавной буквы, от трех символов)'
    },
    'middleName': {
        pattern: NAME_PATTERN,
        errorMessage: 'Отчество должно состоять из (кириллицы, одной заглавной буквы, от трех символов)'
    },
    'email': {
        pattern: EMAIL_PATTERN,
        errorMessage: 'Некорректный email'
    },
    'phone': {
        pattern: PHONE_PATTERN,
        errorMessage: 'Некорректный номер телефона'
    }
};

window.addEventListener('load', () => {
    const inputs = Array.from(document.querySelectorAll('#user-form input'))
        .filter(input => validateFields.includes(input.name));

    inputs.forEach(input => {
        input.required = true;
        input.pattern = validateFieldsConfig[input.name].pattern.source;
    });

    inputs.forEach(input => input.addEventListener('blur', validate))
})

const errorsFields = {};

function validate(inputEvent) {
    const input = inputEvent.target;
    const inputValue = input.value;
    const inputError = errorsFields[input.name];

    const isEmpty = input.required && !inputValue;
    const invalidData = input.pattern && !RegExp(input.pattern).test(inputValue);

    switch (true) {
        case isEmpty:
            createError('Поле пустое', input);
            break;
        case invalidData:
            createError(validateFieldsConfig[input.name].errorMessage, input);
            break;
        default:
            inputError?.remove();
            errorsFields[input.name] = null;
            break;
    }
}

function createError(text, input) {
    const errorElement = errorsFields[input.name] ?? document.createElement('p');
    errorElement.innerText = text;

    if (errorsFields[input.name]) return;

    errorElement.classList.add('field-not-valid');
    input.parentNode.appendChild(errorElement);
    errorsFields[input.name] = errorElement;
}
