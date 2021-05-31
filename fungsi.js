function klik()
{
    var plus = document.getElementsByClassName('tomboltambah');
    var kurang = document.getElementsByClassName('tombolkurang');
    var nilai=0;
    for(let i=0;i<plus.length;i++)
    {
        var tombolplus= plus[i];
        tombolplus.addEventListener('click',function(event){
            var kliktombol = event.target;
            var masuk = kliktombol.parentElement.children[3];
            var angka = masuk.value;          
            nilai = parseInt(angka) + 1;
            
            masuk.value=nilai;
            
        })
    }

    for(let i=0;i<kurang.length;i++)
    {
        var tombolkurang= kurang[i];
        tombolkurang.addEventListener('click',function(event){
            var kliktombol = event.target;
            var masuk = kliktombol.parentElement.children[3];
            var angka = masuk.value;          
             nilai = parseInt(angka) - 1;
            
            if(nilai<0){
                masuk.value=nilai + 1;
            }
            else{
                masuk.value=nilai;
            }
            
        })
    }   
}



klik();
