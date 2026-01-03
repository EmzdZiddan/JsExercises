// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', () => {
//     const ul = document.querySelector('section#b ul');
//     const li = document.createElement('li');
//     li.textContent = 'BISA';
//     ul.appendChild(li);
// } ); 


// const p3 = document.querySelector('.p3');
// p3.onclick = () => {
//     p3.style.backgroundColor = 'lightblue';
  
// }



const p4 = document.querySelector('section#b p');

const h2Baru = document.createElement('h2');
h2Baru.textContent = 'Judul Baru!';

p4.replaceWith(h2Baru);
