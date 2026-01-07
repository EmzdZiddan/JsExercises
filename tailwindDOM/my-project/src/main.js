const a = document.querySelectorAll('ul li');

a.forEach( (cek) => {
cek.addEventListener('click', () => {
   cek.classList.toggle('bg-red-500');
})
})





function penduduk3 (nama, umur, nik) {
    this.nama = nama;
    this.umur = umur;
    this.nik = nik;
}

let entry = new penduduk3('lalapo',22,1110)
console.table(entry)


const createPenduduk = (nama, umur, nik) => ({nama,umur,nik});

let orang2 = createPenduduk('popo', 22, 1222);
console.table(orang2);