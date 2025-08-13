# 🎙️ Podcast Menager

Um app estilo **Netflix**, projetado para centralizar e organizar episódios de podcasts em vídeo, agrupados por **categorias** como saúde, fitness, mentalidade, humor e outros. Ideal para quem quer consumir conteúdo de forma mais segmentada e prática.

---

## 🚀 Funcionalidades

- 📚 Listagem de episódios organizados por **categorias**
- 🔍 Filtro de episódios por **nome do podcast**
- 📺 Integração com vídeos hospedados no **YouTube**
- 🧠 Estrutura backend simples utilizando **Node.js (HTTP nativo)**

---

## 🧱 Estrutura dos Dados

Os episódios seguem o seguinte formato:

```js
[
    {
        podcastName: "flow",
        episode: "Criando do ZERO",
        videoId: "00000",
        cover: "https://i.ytimg.com/vi/Fhy-5CtVkiM/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=Fhy-5CtVkiM",
        categories: ["fitnes", "saude"]
    },
    ...
]

 Como funciona
A aplicação backend usa o módulo nativo do Node.js para criar um servidor HTTP básico. As rotas disponíveis são:

| Método | Rota        | Descrição                            |
| ------ | ----------- | ------------------------------------ |
| GET    | `/podcasts` | Retorna todos os episódios           |
| GET    | `/episode`  | Retorna episódios filtrados por nome |

| Ferramenta     | Descrição                                       |
| -------------- | ----------------------------------------------- |
| **Node.js**    | Execução do servidor backend                    |
| **TypeScript** | Tipagem estática e melhor organização de código |
| **TSX**        | Utilitário moderno para rodar projetos TS/JS    |
| **Tsup**       | Empacotador rápido para gerar builds            |
| **YouTube**    | Fonte dos vídeos dos episódios                  |
