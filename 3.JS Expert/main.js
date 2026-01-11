// // Object.create

// const methodeMhs = {
//     makan : function (porsi) {
//         this.energi += porsi
//         console.log(`lu makan nasi ${porsi}`)
//     },

//     tidur : function (durasi) {
//         this.energi += durasi
//         console.log(`lu dah tidur ${durasi} jam`)
//     }
// }

// function mahasiswa3 (nama,energi) {
//     let data = Object.create(methodeMhs);
//     data.nama = nama;
//     data.energi = energi;
//     return data;
// }

// let entry1 = mahasiswa3 ('Abah Lala',22)
// entry1.makan(14)
// entry1.tidur(34)

// console.log(entry1)



// Prototype
// function mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// mahasiswa.prototype.makan = function (porsi) {
//         this.energi += porsi
//         console.log(`lu makan nasi ${porsi}`)
//     }

// const budi = new mahasiswa('Budi',10); console.log(budi); 



// // Class
// class Mahasiswa {
//     constructor(nama, energi) {  
//         this.energi = energi;
//         this.nama = nama;
//     }
    
//     makan(porsi) {
//         this.energi += porsi;
//         console.log(`lu makan nasi ${porsi}`);
//     }
    
// }

// const gurita = new Mahasiswa('gurita', 10);

// console.log(gurita);  



// Closure

// function cek1 () { 
//     const nama = 'galih'
//     function cek2 () { 
//         console.log(nama)
//     }
//     cek2()
// }
// cek1()



// // Higher Order Function

// function cek1 (mulai,selesai) {
//     console.log(`ayooo mengerjakan ${mulai} okee`)
//     selesai();
// }

// function selesai () {
//     alert(`selesai mengerjakan`)
// }

// cek1('programming',selesai)



// const angka = [-1,-3,-4,2,5,6,7,8]

// const newAngka1 = angka.filter(a => a >= 5);
// console.log(newAngka1)

// const newAngka2 = angka.map(a => a*2)
// console.log(newAngka2)

// const newAngka3 = angka.reduce((a,b) => a + b)
// console.log(newAngka3)

// // Methode Chaining
// const newAngka4 = angka.filter(a => a >= 5).map(a => a*5)
// console.log(newAngka4)


// Tagged Templates

// const nama = 'pororo';
// const umur = 15;
// const alamat = 'raroh';

// function coba (a,...values) {
//     return a.reduce((result,str,i) => `${result}${str}${values[i] || ''}`,'')
// }
// const str = coba`hallo nama saya ${nama}, dan umur saya ${umur}`;
// console.log(str)



// // Destructuring Assignment

// // array
// const cek = ['satu','dua','tiga'];
// const [a,b,c] = cek;
// console.log(a)
// console.log(b)
// console.log(c)

// // function
// function cek2 () {
//     return [5,7]
// }

// const [angka1,angka2] = cek2()
// console.log(angka1)

// // object literal
// const cek3 = {
//     nama : 'lalapo',
//     umur : 22
// }
// const {nama,umur} = cek3;
// console.log(nama)

// // object assign to new variabel
// const cek4 = {
//     nama : 'lalapo',
//     umur : 22
// }
// const {nama:n ,umur:u} = cek4;
// console.log(n)


// Destructuring Function
const identitas = {
    nama : 'lalapo',
    umur : 22
}

function mhs ({nama,umur}) {
    return `${nama} dan ${umur}`
}

console.log(mhs(identitas))