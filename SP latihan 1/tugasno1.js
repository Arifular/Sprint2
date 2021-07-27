function luaspersegipanjang(p, l){
    luas = p * l 
    document.write("panjang : " + p + "<br>")
    document.write("lebar : " + l + "<br/>")
    document.write("luas persegi panjang: "+ luas )
}

inputpanjang = prompt("masukan nilai panjang")
inputlebar = prompt("masukan nilai  lebar")
luaspersegipanjang(inputpanjang, inputlebar)