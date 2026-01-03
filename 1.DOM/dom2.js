const p4 = document.querySelector('section#b p');
p4.addEventListener('mouseenter', () => {
    const ul = document.querySelector('section#b ul');
    const li = document.createElement('li');
    li.textContent = 'BISA';
    ul.appendChild(li);
} ); 


const p3 = document.querySelector('.p3');
p3.onclick = () => {
    p3.style.backgroundColor = 'lightblue';
  
}


