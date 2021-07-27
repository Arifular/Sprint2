var santriPondok = ['Wandi','Aldi','Acep','Putra','Hafif','Syofyan',"Rahmad"];
    document.write('Daftar Santri Pondok :')
    document.write('<ol>');
    for(let x = 0; x < santriPondok.length; x++){
        document.write(`<li>${santriPondok[x]} </li>`);
    }
    document.write('</ol>');
