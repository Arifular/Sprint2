//object 1
var mobil = {
    'nama' : 'Avanza',
    'berat' : '900',
    'warna' : 'Putih',
    'beli' : function(nama){
        console.log('saya mau beli' + ' ' + nama);
    }
}
console.log(mobil);
console.log(mobil.beli('Avanza warna Putih'));

//object 2
var motorSport = {
    'nama' : 'Ducati',
    'cc' : 800,
    'warna' : 'merah',
    'booking' : function(sewa){
        console.log('saya booking' + ' ' + sewa);
    }
}
console.log(motorSport);
console.log(motorSport.booking('Ducati cc 800 warna merah'));

//object 3
var pendaftaran = {
    'user' : 'arif',
    'umur' : 20,
    'NIK' : 1223344556,
    'daftar' : function(daftar){
        console.log('silahkan masukkan data mu :' + ' ' + daftar);
    }

}
console.log(pendaftaran);
console.log(pendaftaran.daftar('\n' +'user : arif' + '\n' +'umur : 20' + '\n' +'NIK : 1223344556'));

//object 4
var kartuKeluarga = {
    'pahlawanku' : 'ayah',
    'surgaku' : 'ibu',
    'bidadari' : function(orangTua){
        console.log('bidadari tanpa sayap :' + ' ' + orangTua);
    }

}
console.log(kartuKeluarga);
console.log(kartuKeluarga.bidadari('ayah dan ibu'));

//object 5
var tempatTanggalLahir = {
    'tempat' : 'Ujung gading',
    'tanggal lahir' : '03 februari 2001',
    'ttl' : function(gabung){
        console.log('saya lahir di:' + ' ' + gabung);
    }
}
console.log(tempatTanggalLahir);
console.log('Ujung Gading, 03 Februari 2001');
