import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

populateInfoOutput();


refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);


function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (!refs.input.value || !refs.textarea.value) {
    alert('Заповніть всі поля')
  } else {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
  }

  // refs.input.value = '';
  // refs.textarea.value = '';
}

function populateInfoOutput() {
  const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);

  //   if(savedData) {
  //     if(parsedData.email) {

  //       refs.input.value = parsedData.email || '';
  //       formData.email = parsedData.email;
  //   }
  //   if(parsedData.message) {
  //     // refs.textarea.value = parsedData.message;
  //     refs.textarea.value = parsedData.message || '';
  //     formData.message = parsedData.message;
  //   }
  // }

  if (!savedData) return 
  if (parsedData.email) {
    refs.input.value = parsedData.email || '';
    formData.email = parsedData.email;
  }
  if (parsedData.message) {
    refs.textarea.value = parsedData.message || '';
    formData.message = parsedData.message;
  }

  // console.log(parsedData);
}


