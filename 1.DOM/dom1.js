// MENAMBAHKAN ELEMENT 1
const pBaru = document.createElement('p');
pBaru.textContent = 'ini paragraf anyarrr'

const cek = document.getElementById('a');
cek.append(pBaru);

// MENAMBAHKAN ELEMENT 2
const liBaru = document.createElement('li');
liBaru.textContent = ('Item Baru woy');

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.after(liBaru);


// MENGHAPUS ELEMENT 1
const tujuan = document.getElementsByTagName('a')[0];

tujuan.remove();

// MENGGANTI ELELMEN 
const p4 = document.querySelector('section#b p');

const h2Baru = document.createElement('h2');
h2Baru.textContent = 'Judul Baru!';

p4.replaceWith(h2Baru);

