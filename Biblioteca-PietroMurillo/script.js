const livros = [
  {
    id: 1,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis (1899)",
    importancia: "Considerado um dos pilares da literatura brasileira, sua narrativa ambígua ainda gera debates sobre Capitu.",
    sinopse: "Conta a história de Bento Santiago (Bentinho) e sua relação com Capitu, explorando ciúme, memória e sentimentos humanos.",
    capa: "img/domcasmurro.jpg",
    curiosidade: "A expressão 'olhos de ressaca' virou popular no Brasil."
  },
  {
    id: 2,
    titulo: "O Cortiço",
    autor: "Aluísio Azevedo (1890)",
    importancia: "Uma das principais obras do Naturalismo no Brasil, crítica social e retrato coletivo.",
    sinopse: "Mostra a vida em um cortiço no Rio de Janeiro, com conflitos sociais e desejos dos moradores.",
    capa: "img/ocortico.jpg",
    curiosidade: "Inspirado em cortiços reais do Rio de Janeiro do século XIX."
  },
  {
    id: 3,
    titulo: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis (1881)",
    importancia: "Um marco do Realismo brasileiro, inovador pela narrativa de um 'defunto-autor'.",
    sinopse: "Brás Cubas narra suas memórias após a morte, misturando filosofia, humor e crítica social.",
    capa: "img/memoriaspostumasdebrascubas.jpg",
    curiosidade: "Inspirado na obra francesa 'Memórias de Além-Túmulo'."
  },
  {
    id: 4,
    titulo: "Senhora",
    autor: "José de Alencar (1875)",
    importancia: "Clássico do Romantismo urbano brasileiro, aborda questões sociais e econômicas.",
    sinopse: "Aurélia Camargo, mulher rica, compra seu casamento em um arranjo irônico e crítico à sociedade.",
    capa: "img/senhora.jpg",
    curiosidade: "Faz parte da trilogia de perfis femininos de José de Alencar."
  },
  {
    id: 5,
    titulo: "Iracema",
    autor: "José de Alencar (1865)",
    importancia: "Um dos mais famosos romances indianistas brasileiros.",
    sinopse: "Conta o amor trágico entre o português Martim e a índia Iracema, símbolo da miscigenação brasileira.",
    capa: "img/iracema.jpg",
    curiosidade: "Iracema é considerada um anagrama de 'América'."
  },
  {
    id: 6,
    titulo: "A Moreninha",
    autor: "Joaquim Manuel de Macedo (1844)",
    importancia: "Considerado o primeiro romance urbano brasileiro, foi um enorme sucesso na época e marcou a literatura romântica.",
    sinopse: "A história acompanha Augusto, um estudante de medicina, que passa um fim de semana em Paquetá e acaba se apaixonando por Carolina, apelidada de 'a Moreninha'.",
    capa: "img/amoreninha.jpg",
    curiosidade: "Foi publicado quando o autor tinha apenas 20 anos, tornando-se um best-seller imediato do Romantismo brasileiro."
  } 
];

const params = new URLSearchParams(window.location.search);
const idLivro = params.get("id");

if (idLivro) {
  const livro = livros.find(l => l.id == idLivro);
  if (livro) {
    document.getElementById("titulo").textContent = livro.titulo;
    document.getElementById("autor").textContent = livro.autor;
    document.getElementById("capa").src = livro.capa;
    document.getElementById("capa").alt = "Capa do livro " + livro.titulo;
    document.getElementById("sinopse").textContent = livro.sinopse;
    document.getElementById("importancia").textContent = livro.importancia;
    document.getElementById("curiosidade").textContent = livro.curiosidade;
  }
}
