import fs from "fs" // Importa o módulo para manipular arquivos
import path from "path" // Importa módulo para manipular caminhos de arquivos
import { PodcastModel } from "../models/podcast-transfer-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json"); 
// Caminho para o arquivo JSON com os dados dos podcasts

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
  // Função que retorna lista de podcasts, opcionalmente filtrada pelo nome

  const language = "utf-8"; // Define a codificação para leitura do arquivo
  const rawData = fs.readFileSync(pathData, language); // Lê o arquivo JSON como string
  let jsonfile = JSON.parse(rawData); // Converte string JSON em objeto JS

  if(podcastName){
    jsonfile = jsonfile.filter((podcast: PodcastModel) => podcast.podcastName===podcastName);
    // Filtra o array pelo nome do podcast, se fornecido
  }

  return jsonfile; // Retorna o array filtrado ou completo
}
