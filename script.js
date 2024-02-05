function calcularMedia() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);

    let media =  (nota1 + nota2 + nota3) /3;

    document.getElementById('resultado').innerHTML = `A média é: ` + media.toFixed(2);

    if(media>7) {
        document.getElementById('situacao').innerHTML = `Está Aprovado`;
        document.getElementById('situacao').style.color = 'green';
    } else if(media === 6) {
        document.getElementById('situacao').innerHTML = `Em Recuperação`;
        document.getElementById('situacao').style.color = 'orange';
    } 
    else{
        document.getElementById('situacao').innerHTML = `Está Reprovado`;
        document.getElementById('situacao').style.color = 'red';
        document.getElementById('situacao').style.backgroundColor = 'black';
    }
}