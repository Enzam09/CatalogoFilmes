const filmes = [
    { titulo: "The Legend of Zelda: Breath of the Wild", imagem: "https://images.openai.com/static-rsc-4/EgOEml89o_jCLU33Nmqd-XL14UOCeZAmlih4ccXLu_BVf5BgB_jaG60Yb2ESPCjCc0o-O9COX6sHk1yErMQ3ZGWQauSaRxdeaDWUQyun9KYKBbL-Gy4CYL9HawH97cBhOgkVRy9qKKDmdDfo1Ra57WPuDDW72hyaR0HbXyBIYvoV2wP95IVNd4vO8oYGSzBS?purpose=fullsize", descricao: "Um jogo de aventura em mundo aberto onde você explora o reino de Hyrule, resolve enigmas e enfrenta inimigos para derrotar Calamity Ganon." , breve: "Zelda" },
    { titulo: "Red Dead Redemption 2", imagem: "https://images.openai.com/static-rsc-4/YvwGAMuay6KO6B0TiEja6FrrFAyZ7pN7-jMLjfKG5b615Mv1zxHN0yofvOe5xJU7_Vq2ZMMT_YF6zIA_si2yyJPImueZ5xWIejINbMknlblAwUIKgUco6MeMqIM6wdKccXyjgeknD-ZedNT46Nm7NVaVlQusObXQbtCqN3R8hT164d8cW33zct-axWQUfwrJ?purpose=fullsize", descricao: "Uma aventura de faroeste ambientada no fim do século XIX, acompanhando a história do fora-da-lei Arthur Morgan e sua gangue." ,breve: "Red Dead Redemption" },
    { titulo: "Elden Ring", imagem: "https://cdng.europosters.eu/pod_public/750/216712.jpg", descricao: "RPG de ação em mundo aberto criado em colaboração com George R. R. Martin, conhecido por seus desafios intensos e exploração profunda." , breve: "Elden Ring" },
    { titulo: "Minecraft", imagem: "https://i.sstatic.net/dqVlX.png", descricao: "Um jogo de construção e sobrevivência onde você pode criar praticamente qualquer coisa usando blocos em um mundo gerado proceduralmente." , breve: "Minecraft" },
    { titulo: "God of War Ragnarök", imagem: "https://images.openai.com/static-rsc-4/PZAojnjT7VHatuRJzie2HFSJFkKoPy3MQuTZqAE5uG9poutQrr_3kMhxAlS91zIP6HgA45-Y8Xjlgu6HXDuPfyFv_OiCa-HqDkCLyxcgkGyKr53Dh2MwNrA8rfhyjEmKbZXNTscG1d_3iewCscxHICN_4oU0PYDgFP8ecOhiukyK9ke4QR2hyDcSekMljsor?purpose=fullsize", descricao: "Kratos e Atreus embarcam em uma jornada inspirada na mitologia nórdica para enfrentar os eventos do Ragnarök.", breve: "God Of War" },
    { titulo: "Grand Theft Auto V", imagem: "https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png", descricao: "Jogo de ação em mundo aberto que acompanha três protagonistas em uma cidade inspirada em Los Angeles." , breve: "GTA V" },
]

const listarFilmes = document.getElementById("listarFilmes");

function mostrarFilmes(lista) {
    listarFilmes.innerHTML = ""
    lista.forEach(filme => {
        listarFilmes.innerHTML += `
        <div class="col-md-4">
          <div class="card card-filme h-100">
            <img src="${filme.imagem}" class="card-img-top">
            <div class="card-body">
              <h3>${filme.titulo}</h3>
              <p>${filme.breve}</p>
              <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}', '${filme.descricao}')">Ver detalhes</button>
            </div>
          </div>
        </div>
        `
    })
}

mostrarFilmes(filmes)

function verDetalhes(titulo, descricao) {
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}