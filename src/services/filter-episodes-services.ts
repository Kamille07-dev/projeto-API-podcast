import { repositoryPodcast } from "../repositories/podcasts-repository";
import { FilterPodCastModel } from "../models/filter-podcast-model.ts";
import { StatusCode } from "../utils/status-code";

// Declara uma função assíncrona chamada "serviceFilterEpisodes" que recebe um parâmetro opcional "podcastName" do tipo string
// e retorna uma promessa (Promise) que, quando resolvida, vai entregar um objeto do tipo FilterPodCastModel.
export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<FilterPodCastModel> => {

  // Define o formato da resposta inicial com statusCode 0 e body vazio
  let responseFormat: FilterPodCastModel = {
    statusCode: 0,
    body: [],
  };

  // Extrai o valor da query "?p=" da string podcastName, se existir, senão retorna string vazia
  const queryString = podcastName?.split("?p=")[1] || "";

  // Busca os dados do podcast no repositório usando a query extraída
  const data = await repositoryPodcast(queryString);

  // Verifica se o array data contém algum elemento
  if(data.length !== 0){
    // Se tiver conteúdo, define statusCode como OK
    responseFormat.statusCode = StatusCode.OK;
  }
  else{
    // Se não tiver conteúdo, define statusCode como NoContent
    responseFormat.statusCode = StatusCode.NoContent;
  }

  // Atribui os dados encontrados ao body da resposta
  responseFormat.body = data;

  // Retorna o objeto de resposta com statusCode e body preenchidos
  return responseFormat;
};

