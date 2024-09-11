// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const form = document.getElementById('promise-form');
const resultDiv = document.getElementById('result');

const makePromise = ({ delay, shouldResolve }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
};

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const delay = Number(event.target.delay.value); 
  const shouldResolve = event.target.shouldResolve.value === 'true'; 

  
  makePromise({ delay, shouldResolve })
    .then((message) => {
      console.log(message); 
      resultDiv.textContent = message; 
    })
    .catch((error) => {
      console.error(error); 
      resultDiv.textContent = error; 
    });
});

