// MENAMBAHKAN PARAGRAF BARU
const pBaru = document.createElement('p');
const isiTeks = document.createTextNode('Paragraf Anayar');
pBaru.appendChild(isiTeks);

const cek = document.getElementById('a');
cek.appendChild(pBaru);


// MANEAMBAHKAN ITEM BARU DI LIST
const liBaru = document.createElement('li');
const isiLi = document.createTextNode('Item Baru woy');
liBaru.appendChild(isiLi);

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.before(liBaru);


// MENGHAPUS ELEMENe
const tujuanPar = document.getElementById('a');
const tujuan = document.getElementsByTagName('a')[0];
tujuanPar.removeChild(tujuan);


// MENGGANTI ELELMEN 
const sb = document.querySelector('section#b');
const p4 = document.querySelector('section#b p');

const h2Baru = document.createElement('h2');
h2Baru.textContent = 'Judul Baru!';

sb.replaceChild(h2Baru, p4);

