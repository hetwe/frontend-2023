window.addEventListener('load', () => {
    const userForm = document.forms.userForm;

    userForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(document.forms.userForm);

        for (const [key, value] of formData) {
            console.log(key, value);
        }

        // Ок, если данные с формы не содержат массива
        
        const data = Object.fromEntries(formData);

        const res = {};

        // Если с формы придет массив например если выбрать несколько чекбоксов, обрабатывать их надо так
        Array.from(formData.keys()).forEach(key => {
            console.log(key);
            console.log(formData.getAll(key));
            const keyValues = formData.getAll(key);
            res[key] = keyValues.length > 1 ? keyValues : formData.get(key);
        });

        console.log(res);
        console.log(data);
    })
})

