const form = document.querySelector('.feedback-form');
const formFields = form.querySelectorAll('input, textarea');

form.addEventListener('input', inputEvent);
form.addEventListener('submit', submitEvent);

function inputEvent(e) {
    let values = {};

    formFields.forEach(el => values[el.name] = form.elements[el.name].value.trim())

    const valuesJson = JSON.stringify(values);
    localStorage.setItem('feedback-form-state', valuesJson);
}

const storageValues = localStorage.getItem('feedback-form-state');
if (storageValues) {
    const values = JSON.parse(storageValues);

    formFields.forEach(el => el.value = values[el.name]);
}

function submitEvent(e) {
    e.preventDefault();
    let required = true;

    formFields.forEach(el => !el.value.trim() ? required = false : 0);

    if (required) {
        let values = {};
        formFields.forEach(el => values[el.name] = form.elements[el.name].value.trim());

        console.log(values);

        form.reset();
        localStorage.removeItem('feedback-form-state');
    }
}