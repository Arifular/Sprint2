function hitungvolumebalokluaspermukaanbalok(p, l, t){
    volume = p * l * t
    luas = 2 *(p * l) + (p * t) + (l * t)
    document.write("panjang : " + p + "<br/>")
    document.write("lebar : " + l + "<br/>")
    document.write("tinggi : "+ t + "<br/>")
    document.write("volume :" + volume + "<br/>") 
    document.write("luas permukaan balok:"+ luas)
}

inputpanjang = prompt("masukan nilai panjang")
inputlebar = prompt("masukan nilai  lebar")
inputtinggi = prompt("masukan nilai tinggi")
hitungvolumebalokluaspermukaanbalok(inputpanjang, inputlebar, inputtinggi)