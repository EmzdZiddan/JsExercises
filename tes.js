const pBaru = document.createElement('p');
const isiTeks = document.createTextNode('Paragraf Anayar');
pBaru.appendChild(isiTeks);

const cek = document.getElementById('a');
cek.appendChild(pBaru);


/////////////////////////////////////////////////////////////

const liBaru = document.createElement('li');
const isiLi = document.createTextNode('Item Baru woy');
liBaru.appendChild(isiLi);

const ulBaru = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');
ulBaru.insertBefore(liBaru, li2);





