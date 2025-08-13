export interface PodcastModel {
  podcastName: string; // Nome do podcast
  episode: string; // Nome/identificador do episódio
  videoId: string; // ID do vídeo associado
  categories: string[]; // Lista de categorias do podcast
}
