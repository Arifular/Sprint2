var nilaiSantri = [ 5, 9, 6, 7, 9, 8, 10, 7, 8, ];
var jumlahNilai = 0;
for (i in nilaiSantri){
    jumlahNilai += nilaiSantri[i];
}
var rataRata = jumlahNilai / nilaiSantri.length;
document.write('rata rata nilai adalah ' + rataRata.toFixed(2));
