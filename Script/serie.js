const serie = [
    { titulo: "Breaking Bad", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/hGwm9Cj3CdbJIqQWNExQqiYmCd4.jpg", descricao: "Um professor de química descobre que tem câncer e decide fabricar metanfetamina para garantir o futuro financeiro da família. A série acompanha sua transformação de homem comum para um poderoso criminoso." , breve: "Breaking Bad" },
    { titulo: "Stranger Things", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/twfKp60THrcOIep9sjHODOOfO8d.jpg", descricao: "Em uma pequena cidade dos anos 1980, um garoto desaparece misteriosamente. Seus amigos encontram uma menina com poderes sobrenaturais e descobrem experimentos secretos e uma dimensão paralela assustadora." ,breve: "Stranger Things" },
    { titulo: "The Crown", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/ehUMAA3qDR5HNor9DB60g72KNQZ.jpg", descricao: "Retrata a vida da rainha Elizabeth II e os principais eventos políticos e familiares da monarquia britânica ao longo de várias décadas." , breve: "The Crown" },
    { titulo: "Dark", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/1DLjjvSWMYo17B7wuz6YikB96hH.jpg", descricao: "O desaparecimento de crianças em uma pequena cidade revela uma complexa trama envolvendo viagens no tempo, segredos familiares e paradoxos temporais." , breve: "Dark" },
    { titulo: "The Office", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/e7BoS8uUnew9ioS6reqtK9matqy.jpg", descricao: "Uma comédia em estilo documentário que acompanha o cotidiano dos funcionários de uma empresa de papel. Conhecida pelo humor constrangedor e personagens memoráveis.", breve: "The Office" },
    { titulo: "Arcane", imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/m3Tzf6k537PnhOEwaSRNCSxedLS.jpg", descricao: "Uma animação de alta qualidade que explora o conflito entre as cidades de Piltover e Zaun, acompanhando a história das irmãs Vi e Jinx em meio a disputas políticas e tecnológicas." , breve: "Arcane" },
]

const listarSeries = document.getElementById("listarSeries");

function mostrarSerie(lista) {
    listarSeries.innerHTML = ""
    lista.forEach(serie => {
        listarSeries.innerHTML += `
        <div class="col-md-4">
          <div class="card card-filme h-100">
            <img src="${serie.imagem}" class="card-img-top">
            <div class="card-body">
              <h3>${serie.titulo}</h3>
              <p>${serie.breve}</p>
              <button class="btn btn-dark" onclick="verDetalhes('${serie.titulo}', '${serie .descricao}')">Ver detalhes</button>
            </div>
          </div>
        </div>
        `
    })
}

mostrarSerie(serie)

function verDetalhes(titulo, descricao) {
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}
