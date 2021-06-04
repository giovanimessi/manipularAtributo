function trocar(filename,animal){
    document.querySelector('.imagem').setAttribute('src','assets/imagem/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal',animal);

}

function pegar(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert('O nome do animal é '+ animal);
}
