exercicios.forEach(exercicio => {
    console.log(exercicio.descricao);    
});

function buscar(){
    let nome = document.getElementById('filtro-exercicio').value;
    let grupoMusc = document.getElementById('filtro-grupo-muscular').value;
    console.log('buscando.....');
    console.log(nome);
    console.log(grupoMusc);
}