window.addEventListener('load', () => {
    const t = /^((\+7|7|8)+([0-9]){10})$/gm;

    const phoneInput = document.getElementById('phone');

    phoneInput.value = '+7 ______-__-__';

    phoneInput.addEventListener('input', (phoneInputEvent) => {
        const phoneInput = phoneInputEvent.target;
        const phoneInputValue = phoneInput.value;

        phoneInput.selectionStart = 4;

        console.log(phoneInput.selectionStart);
    });

    phoneInput.addEventListener('focus', (phoneInputEvent) => {
        const phoneInput = phoneInputEvent.target;
        phoneInput.setSelectionRange(0, 0);
        phoneInput.focus();
        console.log(phoneInputEvent)
    })
})

// window.addEventListener("DOMContentLoaded", function() {
//     [].forEach.call( document.querySelectorAll('.tel'), function(input) {
//         var keyCode;
//         function mask(event) {
//             event.keyCode && (keyCode = event.keyCode);
//             var pos = this.selectionStart;
//             if (pos < 3) event.preventDefault();
//             var matrix = "+7 (___) ___ ____",
//                 i = 0,
//                 def = matrix.replace(/\D/g, ""),
//                 val = this.value.replace(/\D/g, ""),
//                 new_value = matrix.replace(/[_\d]/g, function(a) {
//                     return i < val.length ? val.charAt(i++) || def.charAt(i) : a
//                 });
//             i = new_value.indexOf("_");
//             if (i != -1) {
//                 i < 5 && (i = 3);
//                 new_value = new_value.slice(0, i)
//             }
//             var reg = matrix.substr(0, this.value.length).replace(/_+/g,
//                 function(a) {
//                     return "\\d{1," + a.length + "}"
//                 }).replace(/[+()]/g, "\\$&");
//             reg = new RegExp("^" + reg + "$");
//             if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
//             if (event.type == "blur" && this.value.length < 5)  this.value = ""
//         }
//
//         input.addEventListener("input", mask, false);
//         input.addEventListener("focus", mask, false);
//         input.addEventListener("blur", mask, false);
//         input.addEventListener("keydown", mask, false)
//
//     });
//
// });
