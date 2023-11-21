/**
 * Валидация, которая изменяет дефолтное сообщение у input c аттрибутом required, когда input заполнен некорректно
 */

const requiredFields = ['firstName', 'lastName', 'email'];

window.addEventListener('load', () => {
    const inputs = Array.from(document.querySelectorAll('#user-form input'))

    inputs.filter(input => requiredFields.includes(input.name))
        .forEach(input => input.required = true);

    function validate(inputEvent) {
        const input = inputEvent.target;
        input.setCustomValidity('');
        if (!!input.validity.valid) input.setCustomValidity('');
        else if (input['required'] && !input.value) {
            input.setCustomValidity('Заполните поле');
        }
        else if (input['pattern'] && !input.value.match(input['pattern'])) {
            input.setCustomValidity('Некорректный паттерн');
        }
    }

    inputs.forEach(input => input.addEventListener('blur', validate))
})

