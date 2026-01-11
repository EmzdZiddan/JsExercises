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

const nama = 'pororo';
const umur = 15;
const alamat = 'raroh';

function coba (a,...values) {
    return a.reduce((result,str,i) => `${result}${str}${values[i] || ''}`,'')
}
const str = coba`hallo nama saya ${nama}, dan umur saya ${umur}`;
console.log(str)



// let isi = ['jeruk','manggis','pisang','durian']

let angka = [10, 20, 30]


let total = angka.reduce((a, b, c) => `${a}, ${b}, ini ce ${c}`)
console.log(total)

