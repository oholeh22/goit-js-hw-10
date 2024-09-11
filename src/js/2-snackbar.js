import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('promise-form');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const delay = Number(event.target.elements.delay.value);
    const state = event.target.elements.state.value;

    const shouldResolve = state === 'fulfilled';

    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise in ${delay}ms`);
        } else {
          reject(`❌ Rejected promise in ${delay}ms`);
        }
      }, delay);
    })
    .then((message) => {
      iziToast.success({ title: 'Success', message: message });
      resultDiv.textContent = message;
    })
    .catch((error) => {
      iziToast.error({ title: 'Error', message: error });
      resultDiv.textContent = error;
    });
  });
});
